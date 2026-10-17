# Relaxed Theme – Semantic Focus

[![Build & Release VS Code Extension](https://github.com/chaluvadis/relax-theme-semantic-focus/actions/workflows/main.yml/badge.svg)](https://github.com/chaluvadis/relax-theme-semantic-focus/actions/workflows/main.yml)

A family of three calm, readable Visual Studio Code themes with semantic syntax highlighting and coordinated workbench colors. Choose a palette for your workspace and lighting:

- **Dark Focus** — neutral dusk tones with green focus cues.
- **Day Light** — a soft daylight base with cool blue accents.
- **Night Warm** — warm charcoal surfaces with amber accents.

All three variants share the same semantic token mappings and UI coverage while adapting colors to their palette.

## What's new

- Added coordinated colors for merge conflict decorations and the merge editor, test results and coverage, debugger icons, SCM graph history, and the Settings UI.
- Extended AI editing support with colors for inline chat, inline code changes, ghost text suggestions, and agent session surfaces.
- Applied the new colors consistently across Dark Focus, Day Light, and Night Warm using each variant's existing palette.
- Updated the README to reflect the current color coverage and varied transparency levels.

## Choose and install a theme

Install [Relaxed Theme – Semantic Focus from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=nomad-in-code.relaxed-theme-semantic-focus). Then open **Preferences: Color Theme** from the Command Palette and select one of:

- Relaxed Theme - Dark Focus (Semantic)
- Relaxed Theme - Day Light (Semantic)
- Relaxed Theme - Night Warm (Semantic)

The extension requires VS Code `^1.140.0`.

## Features

- **Semantic syntax colors** for functions, methods, parameters, properties, classes, interfaces, enums, namespaces, decorators, modifiers, and readonly values.
- **Editor details** including bracket pair guides, selections, find and peek views, inlay hints, sticky scroll, minimap, and diff decorations.
- **Workbench coverage** for tabs, editor groups, lists, menus, notifications, sidebars, panels, status bar, terminal, and chat.
- **AI editing surfaces** for inline chat, agent sessions, ghost text, inserted and removed suggestions, and chat code blocks.
- **Development tools** including settings controls, test states and coverage indicators, debugger icons, merge conflict views, and SCM graph history.
- **Terminal ANSI palettes** coordinated with each theme's syntax and UI colors.

The color IDs follow the [VS Code Theme Color Reference](https://code.visualstudio.com/api/references/theme-color). Theme colors are additive: existing user color customizations can continue to override them.

## Palette overview

| Theme | Background | Foreground | Accent | Focus | Function / Method | Keyword | String | Error / Removed |
|---|---|---|---|---|---|---|---|---|
| Dark Focus | `#2b2f34` | `#dde1e6` | `#7e8f9c` | `#8fae6b` | `#85a7bf` | `#a47aa7` | `#8fae6b` | `#c4776f` |
| Day Light | `#f3f4f6` | `#2a2f37` | `#4b6b7d` | `#4b6b7d` | `#2f6d86` | `#7a4f7f` | `#4b7d53` | `#b03e34` |
| Night Warm | `#2f3336` | `#e3e0dc` | `#cfa776` | `#d6b56f` | `#e0a46a` | `#c48573` | `#95ad63` | `#ce6f65` |

These are representative palette colors. Each theme JSON contains the complete UI, editor, terminal, and syntax mapping.

## Semantic highlighting

Semantic highlighting is enabled in the theme files. VS Code language support supplies semantic tokens; install the relevant language extension for the best results. TypeScript and JavaScript support is built in. C# support is available through [C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit) or [C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp). Python, YAML, JSON, Markdown, Dockerfile, and other languages also receive TextMate scope colors where supported by their grammars.

The themes provide global semantic token defaults and focused overrides for TypeScript, JavaScript, C#, and Python. For example, parameters and properties have TypeScript/JavaScript overrides, while interfaces and enum members have C# overrides. Global rules remain the fallback for other languages.

## Terminal colors

| ANSI color | Dark Focus | Day Light | Night Warm |
|---|---|---|---|
| Black | `#151515` | `#4a4a4a` | `#151515` |
| Red | `#c4776f` | `#b03e34` | `#ce6f65` |
| Green | `#8fae6b` | `#4b7d53` | `#95ad63` |
| Yellow | `#d7c27e` | `#8b6f2e` | `#d6b56f` |
| Blue | `#85a7bf` | `#2f6d86` | `#8fa0a0` |
| Magenta | `#a47aa7` | `#7a4f7f` | `#a6789f` |
| Cyan | `#b9d3ea` | `#3f5f8f` | `#c7d4e2` |
| White | `#dde1e6` | `#2a2f37` | `#e3e0dc` |
| Bright green | `#a8c97f` | `#3d8a4a` | `#a8c070` |
| Bright red | `#d98880` | `#c42c2c` | `#e07a70` |

## Optional settings

Enable the editor features used in the theme with settings like these:

```json
{
  "editor.semanticHighlighting.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.guides.bracketPairsHorizontal": true,
  "editor.renderWhitespace": "boundary"
}
```

Overlay surfaces use varied transparency levels. To make selected Dark Focus surfaces opaque, set their alpha channel to `ff` in `workbench.colorCustomizations`:

```json
{
  "workbench.colorCustomizations": {
    "editorSuggestWidget.background": "#24282dff",
    "quickInput.background": "#282c31ff",
    "menu.background": "#282c31ff",
    "notifications.background": "#282c31ff",
    "dropdown.background": "#282c31ff",
    "breadcrumbPicker.background": "#282c31ff",
    "peekViewEditor.background": "#2f3540ff"
  }
}
```

Adjust the color bases for Day Light or Night Warm. The same alpha-channel override works for other semi-transparent theme colors.

## Preview

![Preview of the three Relaxed Theme variants](https://github.com/chaluvadis/relax-theme-semantic-focus/raw/HEAD/images/themes.gif)

## Contributing

Issues and pull requests are welcome. Screenshots showing before and after are helpful for visual changes. Keep additions aligned with the existing palette and check the result in VS Code across light and dark surfaces.

## Credits

Inspired by the original [Relaxed Theme](https://marketplace.visualstudio.com/items?itemName=mischah.relaxed-theme). Thanks to its creators for the foundation.

## License

[MIT](LICENSE)
