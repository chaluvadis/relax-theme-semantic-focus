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

## VSCode 1.109 Modernizations

Starting with version 0.0.13, Relaxed Theme – Semantic Focus incorporates the modern UI features introduced in Visual Studio Code 1.109, bringing enhanced depth, focus, and a contemporary aesthetic to all three theme variants.

### Key Enhancements

**Transparency & Frosted Glass Effects**
- Overlay elements (Command Palette, Quick Open, Suggest Widget, Dropdown menus) now use semi-transparent RGBA backgrounds with 87-94% opacity, creating a subtle frosted glass appearance that allows underlying content to show through while maintaining excellent readability.
- Peek views and breadcrumb pickers feature layered transparency (90-94% opacity), giving a modern "floating" feel to these UI elements.
- Notifications, menus, and input widgets adopt similar transparency for a cohesive, unified experience across all interactive surfaces.

**Softer, More Refined Shadows**
- Widget shadows reduced to 25% opacity for dark themes (#00000040) and 12.5% for light theme (#00000020), creating gentler depth cues without overwhelming the interface.
- Scrollbar shadows now use approximately 25% opacity, providing subtle elevation hints that enhance spatial relationships between UI components.
- The softer shadow approach aligns with modern design principles, reducing eye strain during extended coding sessions.

**Flattened Background Hierarchy**
- Reduced contrast between editor, sidebar, panel, activity bar, and status bar backgrounds for a more unified, cohesive workspace.
- Dark Focus: Background tones now range from #26292e to #2b2f34, creating smooth transitions rather than stark separations.
- Day Light: Ultra-subtle background gradations (#eaedf0 to #f3f4f6) maintain spatial awareness without harsh divisions.
- Night Warm: Harmonized warm charcoal tones (#2b2f33 to #2f3336) for a seamless, enveloping environment.

### Backward Compatibility

All changes are fully backward compatible with VSCode 1.85 and later. The transparency and shadow features work seamlessly across platforms (Windows, macOS, Linux):
- RGBA color values using 8-digit hex notation (#RRGGBBAA) are standard in VSCode theme definitions.
- No experimental APIs or flags are required.
- Themes maintain their core identity and color relationships while adopting modern presentation techniques.

### Design Philosophy

These modernizations enhance visual hierarchy and focus without compromising the core principles that make Relaxed Theme special:
- **Readability First**: Transparency is carefully calibrated to enhance, not interfere with, code legibility.
- **WCAG AA Compliance**: All text maintains 4.5:1 contrast ratios or better against their backgrounds.
- **Semantic Consistency**: Token colors remain unchanged, preserving familiar language highlighting across all updates.
- **Cross-platform Unity**: Effects work identically on all supported operating systems.

The result is a theme family that feels both timeless and contemporary—calm and clear with a modern polish that complements VSCode 1.109's enhanced capabilities.

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

### Semantic token coverage

The table below lists which token types receive dedicated per-language overrides (beyond the global defaults). ✔ = language-specific tuning active, — = global rule applies.

| Token | TypeScript | JavaScript | C# | Python |
|---|---|---|---|---|
| `parameter` | ✔ | ✔ | — | ✔ |
| `property` | ✔ | ✔ | — | — |
| `method` | ✔ | ✔ | — | — |
| `interface` | — | — | ✔ | — |
| `enumMember` | — | — | ✔ | — |
| `namespace` | — | — | ✔ | — |
| `variable.readonly` | — | — | — | ✔ |
| All other tokens | ✔ | ✔ | ✔ | ✔ |

Language-specific values are defined in each theme JSON under `semanticTokenColors` using the `"tokenType:languageId"` selector (e.g. `"parameter:typescript"`). These override the global rule only for that language, so global coverage is always available as a fallback.

## Reduced transparency

All overlay surfaces (Command Palette, Quick Open, menus, notifications, peek views) use 94% opacity by default, which suits most displays. If you are on a lower-contrast monitor or prefer fully solid backgrounds, add any of the following overrides to your `settings.json`:

```json
"workbench.colorCustomizations": {
  // Uncomment / adjust the entries you want to make fully opaque.
  // Replace the last two hex digits with "ff" to remove transparency.
  // Example shown for Dark Focus — adjust hex bases for Day Light / Night Warm.
  "editorSuggestWidget.background": "#24282dff",
  "quickInput.background": "#282c31ff",
  "menu.background": "#282c31ff",
  "notifications.background": "#282c31ff",
  "dropdown.background": "#282c31ff",
  "breadcrumbPicker.background": "#282c31ff",
  "peekViewEditor.background": "#2f3540ff"
}
```

The same technique works for any other semi-transparent color listed in the theme files. Setting the alpha bytes to `ff` fully disables the frosted-glass effect for that surface.

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

## Terminal color accessibility

All three variants ship ANSI terminal colors that are verified for legibility and color-blind safety.

### ANSI color matrix

| Color | Dark Focus | Day Light | Night Warm |
|---|---|---|---|
| Black | #151515 | #4a4a4a | #151515 |
| Red | #c4776f | #b03e34 | #ce6f65 |
| Green | #8fae6b | #4b7d53 | #95ad63 |
| Yellow | #d7c27e | #8b6f2e | #d6b56f |
| Blue | #85a7bf | #2f6d86 | #8fa0a0 |
| Magenta | #a47aa7 | #7a4f7f | #a6789f |
| Cyan | #b9d3ea | #3f5f8f | #c7d4e2 |
| White | #dde1e6 | #2a2f37 | #e3e0dc |
| Bright Green | **#a8c97f** | **#3d8a4a** | **#a8c070** |
| Bright Red | **#d98880** | **#c42c2c** | **#e07a70** |

Bold rows show the adjusted bright-green/red values introduced in this release. Bright variants are now visually distinct from their standard counterparts across all themes.

### Color-blind accessibility

- Every bright red and bright green value maintains **≥3.5:1** contrast against its respective terminal background—ensuring both colors remain individually legible even when hue alone cannot be relied upon.
- The Day Light bright red (#c42c2c) and bright green (#3d8a4a) achieve **≥4.5:1** contrast against the light terminal background (#eaedf1), meeting WCAG AA for normal text.
- Red and green are drawn from opposite regions of the sRGB gamut so they remain distinguishable at moderate luminance differences; users who require stronger separation can override individual colors via `workbench.colorCustomizations` in `settings.json`.
- Terminal foreground (#dde1e6 / #2a2f37 / #e3e0dc) maintains **≥7:1** contrast against each theme's terminal background.

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
