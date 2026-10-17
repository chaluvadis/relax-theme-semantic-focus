# Relaxed Theme – Semantic Focus

[![Build & Release VS Code Extension](https://github.com/chaluvadis/relax-theme-semantic-focus/actions/workflows/main.yml/badge.svg)](https://github.com/chaluvadis/relax-theme-semantic-focus/actions/workflows/main.yml)

A family of three calm, readable Visual Studio Code themes with semantic syntax highlighting and coordinated colors for the editor, workbench, terminal, and AI editing surfaces.

## What's new

- **AI editing:** Added coordinated colors for chat requests, inline chat, ghost text, inserted and removed edits, agent sessions, and edit markers.
- **Workbench coverage:** Added colors for modern floating layouts, top and bottom activity bars, notebooks, charts, interactive editor actions, and additional settings and source control states.
- **Accessibility refinements:** Improved contrast for input placeholders and inactive activity bar icons, and selected higher-contrast foregrounds for agent buttons and badges.
- **Consistent palettes:** Applied the additions across Dark Focus, Day Light, and Night Warm using their existing color families.

## Preview

![Preview of Dark Focus, Day Light, and Night Warm](https://github.com/chaluvadis/relax-theme-semantic-focus/raw/HEAD/images/themes.gif)

## Install and select a theme

Install [Relaxed Theme – Semantic Focus from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=nomad-in-code.relaxed-theme-semantic-focus). Open **Preferences: Color Theme** from the Command Palette and choose one of:

- **Relaxed Theme - Dark Focus (Semantic)** — neutral dusk tones with green focus cues.
- **Relaxed Theme - Day Light (Semantic)** — a soft daylight base with cool blue accents.
- **Relaxed Theme - Night Warm (Semantic)** — warm charcoal surfaces with amber accents.

The extension requires VS Code `^1.140.0`.

## Features

- Semantic colors for functions, methods, parameters, properties, classes, interfaces, enums, namespaces, decorators, modifiers, and readonly values.
- Editor colors for selections, find and peek views, bracket guides, inlay hints, sticky scroll, minimap, and diffs.
- Workbench colors for tabs, editor groups, lists, menus, notifications, sidebars, panels, status bar, terminal, and modern floating surfaces.
- AI editing colors for chat requests, inline chat, agent sessions, ghost text suggestions, inserted and removed edits, and code blocks.
- Notebook colors for cells, outputs, focus and selection, execution indicators, and scrollbars.
- Development surfaces for test results and coverage, debugger icons, merge conflicts, Settings UI, SCM graph history, and charts.

Theme color IDs follow the [VS Code Theme Color Reference](https://code.visualstudio.com/api/references/theme-color). User color customizations can continue to override theme colors.

## Semantic highlighting

Semantic highlighting is enabled in the theme files. VS Code's language support provides semantic tokens; install a language extension when one is needed. TypeScript and JavaScript support is built in. C# support is available through [C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit) or [C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp).

Each theme includes global semantic token defaults and language-specific overrides for TypeScript, JavaScript, C#, and Python. TextMate scopes also cover Python, YAML, JSON, Markdown, Dockerfile, and other grammars where available.

## Palette overview

| Theme | Background | Foreground | Accent | Focus | Function / Method | Keyword | String | Error / Removed |
|---|---|---|---|---|---|---|---|---|
| Dark Focus | `#2b2f34` | `#dde1e6` | `#7e8f9c` | `#8fae6b` | `#85a7bf` | `#a47aa7` | `#8fae6b` | `#c4776f` |
| Day Light | `#f3f4f6` | `#2a2f37` | `#4b6b7d` | `#4b6b7d` | `#2f6d86` | `#7a4f7f` | `#4b7d53` | `#b03e34` |
| Night Warm | `#2f3336` | `#e3e0dc` | `#cfa776` | `#d6b56f` | `#e0a46a` | `#c48573` | `#95ad63` | `#ce6f65` |

These are representative colors; the theme JSON files contain the complete mapping.

## Accessibility

Input placeholder text and inactive activity bar icons use brighter secondary colors. Agent buttons and badges use foreground colors selected for contrast against their backgrounds. Checked contrast ratios for these specific text pairs exceed 4.5:1 in all three variants. This targeted check does not claim that every syntax or UI color pair meets WCAG thresholds.

### Terminal ANSI colors

| Color | Dark Focus | Day Light | Night Warm |
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

Enable editor features used by the themes with settings such as:

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

## Contributing

Issues and pull requests are welcome. Screenshots are helpful for visual changes. Keep additions aligned with the palette families and check them in VS Code across light and dark surfaces.

## Credits

Inspired by the original [Relaxed Theme](https://marketplace.visualstudio.com/items?itemName=mischah.relaxed-theme). Thanks to its creators for the foundation.

## License

[MIT](LICENSE)
