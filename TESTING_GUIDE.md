# Installation and Testing Guide

## Installation

### Method 1: Install from VSIX (Recommended for Testing)

1. **Download the extension package**:
   ```bash
   # The package is available as: relaxed-theme-semantic-focus-0.0.11.vsix
   ```

2. **Install in VSCode**:
   ```bash
   code --install-extension relaxed-theme-semantic-focus-0.0.11.vsix
   ```

   Or via VSCode UI:
   - Open VSCode
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
   - Type "Install from VSIX"
   - Select the `.vsix` file

3. **Reload VSCode** when prompted

### Method 2: Build and Install from Source

1. **Clone the repository**:
   ```bash
   git clone https://github.com/chaluvadis/relax-theme-semantic-focus.git
   cd relax-theme-semantic-focus
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Compile TypeScript**:
   ```bash
   npm run compile
   ```

4. **Package the extension**:
   ```bash
   npx vsce package --no-yarn
   ```

5. **Install the generated .vsix file**:
   ```bash
   code --install-extension relaxed-theme-semantic-focus-0.0.11.vsix
   ```

## Testing the Extension

### Test 1: Syntax Highlighting

1. Create a new file: `test.alloy`
2. Add the following content:

```alloy
// Test syntax highlighting
prometheus.scrape "demo" {
  scrape_interval = "15s"
  targets = discovery.kubernetes.pods.targets
  forward_to = [prometheus.remote_write.default.receiver]
}

loki.write "logs" {
  endpoint {
    url = "http://localhost:3100/loki/api/v1/push"
  }
}
```

3. **Expected results**:
   - Comments should be dimmed
   - `prometheus.scrape` and `loki.write` should be highlighted as component types
   - `"demo"` and `"logs"` should be highlighted as strings
   - Attributes like `scrape_interval`, `targets` should be highlighted as properties
   - Keywords like `forward_to`, `endpoint` should be highlighted

### Test 2: Auto-Completion

1. Open a `.alloy` file
2. Type `prom` and press `Ctrl+Space`
3. **Expected**: Completion suggestions for `prometheus.scrape`, `prometheus.remote_write`, etc.
4. Type `discovery.` and press `Ctrl+Space`
5. **Expected**: Completion suggestions for `discovery.kubernetes`, `discovery.file`
6. Inside a block, type `forw` and press `Ctrl+Space`
7. **Expected**: Completion suggestion for `forward_to`

### Test 3: Validation

1. Open the test file: `test-files/invalid.alloy`
2. **Expected validation errors**:
   - Line with missing closing brace: "Unclosed block"
   - Duplicate component labels: "Duplicate component label"
   - Empty label: "Component label cannot be empty"
   - Unclosed string: "Unclosed string literal"
   - Missing value: "Attribute is missing a value"

3. Create a new file with this content:

```alloy
prometheus.scrape "test1" {
  forward_to = [prometheus.remote_write.default.receiver]
}

prometheus.scrape "test1" {
  forward_to = [prometheus.remote_write.other.receiver]
}
```

4. **Expected**: Error on second occurrence of "test1" label

### Test 4: Formatting

1. Create a file with poorly formatted content:

```alloy
prometheus.scrape "test" {
scrape_interval = "10s"
    forward_to = [prometheus.remote_write.default.receiver]
        targets = []
}
```

2. Right-click in the editor and select "Format Document"
   - Or press `Shift+Alt+F` (Windows/Linux) or `Shift+Option+F` (Mac)

3. **Expected result**:
```alloy
prometheus.scrape "test" {
  scrape_interval = "10s"
  forward_to = [prometheus.remote_write.default.receiver]
  targets = []
}
```

### Test 5: Hover Documentation

1. Open a `.alloy` file
2. Hover over `prometheus.scrape`
3. **Expected**: Tooltip showing "Scrapes Prometheus metrics from targets. Configure with targets and forward_to attributes."
4. Hover over `loki.write`
5. **Expected**: Tooltip showing "Sends logs to a Loki endpoint. Supports batching and authentication."

### Test 6: Comment Toggling

1. Open a `.alloy` file
2. Select a line or multiple lines
3. Press `Ctrl+/` (Windows/Linux) or `Cmd+/` (Mac)
4. **Expected**: Lines are commented with `//`
5. Press the shortcut again
6. **Expected**: Comments are removed

### Test 7: Bracket Matching

1. Open a `.alloy` file
2. Place cursor next to an opening `{`
3. **Expected**: Matching closing `}` is highlighted
4. Try with `[` and `(`
5. **Expected**: All bracket types are matched

### Test 8: Working Configuration

1. Open `test-files/sample.alloy` or `test-files/complete-example.alloy`
2. **Expected**: 
   - No validation errors
   - Proper syntax highlighting
   - All features work correctly

### Test 9: Theme Integration

1. Press `Ctrl+K Ctrl+T` to open theme selector
2. Select one of the Relaxed Theme variants:
   - Relaxed Theme - Dark Focus (Semantic)
   - Relaxed Theme - Night Warm (Semantic)
   - Relaxed Theme - Day Light (Semantic)
3. Open a `.alloy` file
4. **Expected**: Syntax highlighting colors match the selected theme

## Verification Checklist

- [ ] Extension appears in Extensions view
- [ ] `.alloy` files are recognized with Alloy icon
- [ ] Syntax highlighting works for all language elements
- [ ] Auto-completion suggests components and attributes
- [ ] Validation errors appear in real-time
- [ ] Document formatting works correctly
- [ ] Hover documentation appears for known components
- [ ] Comment toggling works
- [ ] Bracket matching and auto-closing work
- [ ] Format on save works (if enabled)
- [ ] No errors in Developer Console (Help > Toggle Developer Tools)

## Troubleshooting

### Extension Not Activating

1. Check if extension is enabled:
   - Open Extensions view (`Ctrl+Shift+X`)
   - Search for "Relaxed Theme"
   - Ensure it's enabled

2. Check file association:
   - Ensure file has `.alloy` extension
   - Check status bar (bottom right) shows "Grafana Alloy"

3. Reload VSCode:
   - Press `Ctrl+Shift+P` and run "Developer: Reload Window"

### Validation Not Working

1. Check for TypeScript compilation errors:
   ```bash
   npm run compile
   ```

2. Check extension logs:
   - Help > Toggle Developer Tools
   - Check Console tab for errors

### Formatting Not Working

1. Ensure no other formatter is interfering:
   - Check settings for `editor.defaultFormatter`
   
2. Try formatting selection instead of full document

### Auto-Completion Not Appearing

1. Check trigger characters:
   - Try typing `.` or `"`
   - Press `Ctrl+Space` to manually trigger

2. Ensure cursor is in appropriate context

## Performance Testing

Test with large files:

1. Create a file with 1000+ lines of Alloy configuration
2. Verify:
   - Syntax highlighting is responsive
   - Validation completes quickly
   - Formatting works without lag
   - No memory leaks over time

## Reporting Issues

If you find any issues:

1. Check VSCode version: `code --version`
2. Check extension version in Extensions view
3. Gather reproduction steps
4. Check Developer Console for errors
5. Report on GitHub: https://github.com/chaluvadis/relax-theme-semantic-focus/issues

Include:
- VSCode version
- Extension version
- Operating system
- Sample `.alloy` file demonstrating the issue
- Screenshots if applicable

## Success Criteria

The extension is working correctly if:

✅ All syntax elements are properly highlighted
✅ Validation catches common configuration errors
✅ Auto-completion helps write configurations faster
✅ Formatting produces clean, readable code
✅ No performance issues with typical file sizes
✅ Integration with VSCode features works seamlessly
✅ Both theme and language support features work together

Enjoy using the Grafana Alloy extension!
