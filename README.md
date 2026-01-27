# Relaxed Theme – Semantic Focus

Relaxed Theme – Semantic Focus is a bundled trio of VS Code themes engineered for semantic clarity, modern UI contrast, and cross-platform readability. Pick the palette that suits your environment:

- Relaxed Theme – Dark Focus (neutral dusk tones with green focus cues)
- Relaxed Theme – Day Light (soft daylight base with sharper focus overlays)
- Relaxed Theme – Night Warm (warm charcoal shell with amber syntax accents, now fully harmonised)

Each variant keeps the same semantic token mapping so language colors stay familiar while the UI adjusts to your lighting.

---
![Build & Release VS Code Extension](https://github.com/chaluvadis/relax-theme-semantic-focus/actions/workflows/main.yml/badge.svg)

## Installation

Install from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=nomad-in-code.relaxed-theme-semantic-focus), then select the variant you prefer from the command palette (`Preferences: Color Theme`).

## What’s new

- Refined keyboard focus and selection overlays across all variants, including explicit focus outlines for list rows.
- Day Light theme gains lighter ANSI “bright” colors and stronger list/terminal selection contrast for better daylight legibility.
- Night Warm switches to a cohesive amber accent family (links, progress, focus) and warmer function/method hues to match the UI shell.
- Dark Focus separates side bar, panel, and status bar luminance so panes remain distinct without harsh contrast jumps.

## Feature highlights

- **Semantic coverage**: Dedicated colors for functions, methods, parameters, properties, classes, interfaces, enums, namespaces, modifiers, decorators, and readonly state.
- **UI polish**: Themed find/replace, peek views, hover highlights, bracket guides, inlay hints, breadcrumbs, sticky scroll, minimap, and diff editor.
- **Git-aware**: Consistent gutter, minimap, and explorer decorations for added/modified/deleted files, plus tuned terminal ANSI colors.

## Palette snapshots

| Theme | Background | Foreground | Primary Accent | Focus Outline | Function / Method | Keyword | String | Alert / Removed |
|---|---|---|---|---|---|---|---|---|
| Dark Focus | #2b2f34 | #dde1e6 | #7e8f9c | #8fae6b | #85a7bf | #a47aa7 | #8fae6b | #c4776f |
| Day Light | #f3f4f6 | #2a2f37 | #4b6b7d | #4b6b7d | #2f6d86 | #7a4f7f | #4b7d53 | #b03e34 |
| Night Warm | #2f3336 | #e3e0dc | #cfa776 | #d6b56f | #e0a46a | #c48573 | #95ad63 | #ce6f65 |

Color values above represent the main UI/accent choices; see the JSON theme files for the full mapping, including terminal, bracket, and diff colors.

## Semantic highlighting

- Ensure **Editor: Semantic Highlighting** is enabled (`Preferences → Settings`).
- Install the language extensions that surface semantic tokens:
  - TypeScript/JavaScript (built-in)
  - C# ([C# Dev Kit or ms-dotnettools.csharp](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp))
  - Python, YAML, JSON, and others benefit from the supplied TextMate scopes.

## Recommended settings

```json
{
  "workbench.colorTheme": "Relaxed Theme - Dark Focus",
  "editor.semanticHighlighting.enabled": true,
  "editor.fontFamily": "SF Mono, 'Cascadia Code', JetBrains Mono, Menlo, Monaco, Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontVariations": true,
  "editor.fontWeight": "500",
  "editor.fontSize": 14,
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.smoothScrolling": true,
  "editor.renderWhitespace": "boundary",
  "editor.guides.bracketPairs": true,
  "editor.guides.bracketPairsHorizontal": true
}
```

Swap the `workbench.colorTheme` value to `Relaxed Theme - Day Light` or `Relaxed Theme - Night Warm` to preload another variant.

## Preview

![Theme Design](https://github.com/chaluvadis/relax-theme-semantic-focus/raw/HEAD/images/themes.gif)

## Credits

Relaxed Theme – Semantic Focus draws inspiration from the original [Relaxed Theme](https://marketplace.visualstudio.com/items?itemName=mischah.relaxed-theme). Thanks to its creators for the foundation that made these focused variants possible. If you have attribution updates, open a PR.

## Contributing

- File issues or PRs with before/after screenshots whenever practical.
- Maintain WCAG AA contrast (4.5:1) for core UI elements.
- Keep new colors aligned with the existing palette families.
- Test on macOS and Windows, and sample TypeScript, JavaScript, C#, and Markdown files before submitting.

## License

See [LICENSE](https://github.com/chaluvadis/relax-theme-semantic-focus/blob/HEAD/LICENSE).

Enjoy a calmer, clearer editor experience—day, night, or in between.
