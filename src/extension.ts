import * as vscode from 'vscode';

const ALLOY_LANGUAGE_ID = 'alloy';

// Common Alloy component types
const KNOWN_COMPONENTS = [
  'prometheus.scrape',
  'prometheus.remote_write',
  'prometheus.exporter.unix',
  'loki.source.file',
  'loki.write',
  'otelcol.receiver.otlp',
  'otelcol.exporter.otlp',
  'discovery.kubernetes',
  'discovery.file',
  'local.file'
];

// Common attributes
const COMMON_ATTRIBUTES = [
  'forward_to',
  'targets',
  'endpoint',
  'url',
  'role',
  'scrape_interval',
  'log_level'
];

interface ValidationIssue {
  line: number;
  message: string;
  severity: vscode.DiagnosticSeverity;
}

export function activate(context: vscode.ExtensionContext) {
  console.log('Grafana Alloy extension is now active');

  const diagnosticCollection = vscode.languages.createDiagnosticCollection('alloy');
  context.subscriptions.push(diagnosticCollection);

  // Register document validation
  context.subscriptions.push(
    vscode.workspace.onDidOpenTextDocument(doc => validateDocument(doc, diagnosticCollection))
  );

  context.subscriptions.push(
    vscode.workspace.onDidChangeTextDocument(event => validateDocument(event.document, diagnosticCollection))
  );

  context.subscriptions.push(
    vscode.workspace.onDidSaveTextDocument(doc => validateDocument(doc, diagnosticCollection))
  );

  // Validate open documents
  vscode.workspace.textDocuments.forEach(doc => validateDocument(doc, diagnosticCollection));

  // Register formatting provider
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(ALLOY_LANGUAGE_ID, {
      provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
        return formatAlloyDocument(document);
      }
    })
  );

  // Register completion provider
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(ALLOY_LANGUAGE_ID, {
      provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        return provideCompletions(document, position);
      }
    }, '.', '"')
  );

  // Register hover provider
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(ALLOY_LANGUAGE_ID, {
      provideHover(document: vscode.TextDocument, position: vscode.Position) {
        return provideHover(document, position);
      }
    })
  );
}

function validateDocument(document: vscode.TextDocument, diagnosticCollection: vscode.DiagnosticCollection) {
  if (document.languageId !== ALLOY_LANGUAGE_ID) {
    return;
  }

  const text = document.getText();
  const issues = validateAlloyConfig(text);
  const diagnostics: vscode.Diagnostic[] = [];

  for (const issue of issues) {
    const line = document.lineAt(Math.min(issue.line, document.lineCount - 1));
    const range = new vscode.Range(
      line.range.start,
      line.range.end
    );
    const diagnostic = new vscode.Diagnostic(range, issue.message, issue.severity);
    diagnostic.source = 'Grafana Alloy';
    diagnostics.push(diagnostic);
  }

  diagnosticCollection.set(document.uri, diagnostics);
}

function validateAlloyConfig(text: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const lines = text.split('\n');

  let braceCount = 0;
  const componentLabels = new Set<string>();

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Skip comments and empty lines
    if (trimmedLine.startsWith('//') || trimmedLine.startsWith('/*') || trimmedLine === '') {
      continue;
    }

    // Check brace balance
    const openBraces = (line.match(/\{/g) || []).length;
    const closeBraces = (line.match(/\}/g) || []).length;
    braceCount += openBraces - closeBraces;

    // Validate component declaration
    const componentMatch = line.match(/^(\s*)([a-zA-Z_][a-zA-Z0-9_\.]*)\s+"([^"]+)"\s*\{/);
    if (componentMatch) {
      const componentType = componentMatch[2];
      const label = componentMatch[3];

      // Check for duplicate labels
      const fullLabel = `${componentType}.${label}`;
      if (componentLabels.has(fullLabel)) {
        issues.push({
          line: i,
          message: `Duplicate component label: ${fullLabel}`,
          severity: vscode.DiagnosticSeverity.Error
        });
      }
      componentLabels.add(fullLabel);

      // Warn about unknown component types
      if (!KNOWN_COMPONENTS.includes(componentType) && !componentType.startsWith('local.')) {
        issues.push({
          line: i,
          message: `Unknown component type: ${componentType}. This may be valid but is not in the common components list.`,
          severity: vscode.DiagnosticSeverity.Warning
        });
      }

      // Check for empty label
      if (!label || label.trim() === '') {
        issues.push({
          line: i,
          message: 'Component label cannot be empty',
          severity: vscode.DiagnosticSeverity.Error
        });
      }
    }

    // Validate attribute assignments
    const attrMatch = line.match(/^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*=/);
    if (attrMatch) {
      const attrName = attrMatch[1];
      
      // Check for missing value
      if (line.trim().endsWith('=')) {
        issues.push({
          line: i,
          message: `Attribute '${attrName}' is missing a value`,
          severity: vscode.DiagnosticSeverity.Error
        });
      }
    }

    // Check for unclosed strings
    const stringMatches = line.match(/"/g);
    if (stringMatches && stringMatches.length % 2 !== 0 && !trimmedLine.startsWith('//')) {
      issues.push({
        line: i,
        message: 'Unclosed string literal',
        severity: vscode.DiagnosticSeverity.Error
      });
    }
  }

  // Check final brace balance
  if (braceCount !== 0) {
    issues.push({
      line: lines.length - 1,
      message: braceCount > 0 ? 'Unclosed block (missing closing brace)' : 'Unexpected closing brace',
      severity: vscode.DiagnosticSeverity.Error
    });
  }

  return issues;
}

function formatAlloyDocument(document: vscode.TextDocument): vscode.TextEdit[] {
  const edits: vscode.TextEdit[] = [];
  const text = document.getText();
  const lines = text.split('\n');
  
  let indentLevel = 0;
  const indentStr = '  '; // 2 spaces
  const formattedLines: string[] = [];

  for (let line of lines) {
    const trimmed = line.trim();
    
    // Skip empty lines and comments
    if (trimmed === '' || trimmed.startsWith('//')) {
      formattedLines.push(line);
      continue;
    }

    // Decrease indent before closing brace
    if (trimmed.startsWith('}')) {
      indentLevel = Math.max(0, indentLevel - 1);
    }

    // Apply current indent
    const formattedLine = indentStr.repeat(indentLevel) + trimmed;
    formattedLines.push(formattedLine);

    // Increase indent after opening brace
    if (trimmed.endsWith('{')) {
      indentLevel++;
    }
  }

  const formattedText = formattedLines.join('\n');
  const fullRange = new vscode.Range(
    document.positionAt(0),
    document.positionAt(text.length)
  );
  
  edits.push(vscode.TextEdit.replace(fullRange, formattedText));
  return edits;
}

function provideCompletions(
  document: vscode.TextDocument, 
  position: vscode.Position
): vscode.CompletionItem[] {
  const completions: vscode.CompletionItem[] = [];

  // Add component types
  for (const component of KNOWN_COMPONENTS) {
    const item = new vscode.CompletionItem(component, vscode.CompletionItemKind.Class);
    item.detail = 'Grafana Alloy Component';
    item.insertText = new vscode.SnippetString(`${component} "\${1:label}" {\n  \${2}\n}`);
    completions.push(item);
  }

  // Add common attributes
  for (const attr of COMMON_ATTRIBUTES) {
    const item = new vscode.CompletionItem(attr, vscode.CompletionItemKind.Property);
    item.detail = 'Component Attribute';
    item.insertText = new vscode.SnippetString(`${attr} = \${1}`);
    completions.push(item);
  }

  return completions;
}

function provideHover(
  document: vscode.TextDocument, 
  position: vscode.Position
): vscode.Hover | undefined {
  const range = document.getWordRangeAtPosition(position);
  if (!range) {
    return undefined;
  }

  const word = document.getText(range);

  // Provide documentation for known components
  if (KNOWN_COMPONENTS.includes(word)) {
    const markdown = new vscode.MarkdownString();
    markdown.appendMarkdown(`**${word}**\n\n`);
    markdown.appendMarkdown('Grafana Alloy component\n\n');
    
    switch (word) {
      case 'prometheus.scrape':
        markdown.appendMarkdown('Scrapes Prometheus metrics from targets.');
        break;
      case 'prometheus.remote_write':
        markdown.appendMarkdown('Sends Prometheus metrics to a remote endpoint.');
        break;
      case 'loki.write':
        markdown.appendMarkdown('Sends logs to a Loki endpoint.');
        break;
      case 'discovery.kubernetes':
        markdown.appendMarkdown('Discovers targets from Kubernetes API.');
        break;
      default:
        markdown.appendMarkdown('Component for Grafana Alloy configuration.');
    }
    
    return new vscode.Hover(markdown);
  }

  return undefined;
}

export function deactivate() {}
