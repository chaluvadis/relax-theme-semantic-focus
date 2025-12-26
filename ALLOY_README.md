# Grafana Alloy Language Support for VSCode

This extension provides comprehensive language support for [Grafana Alloy](https://grafana.com/docs/alloy/latest/) configuration files.

## Features

### Syntax Highlighting
- Full syntax highlighting for Alloy configuration files (`.alloy`)
- Support for:
  - Component declarations (e.g., `prometheus.scrape`, `loki.write`, `discovery.kubernetes`)
  - Attributes and values
  - Comments (single-line `//` and multi-line `/* */`)
  - Strings, numbers, and booleans
  - Expressions and functions

### Validation and Diagnostics
Real-time validation of your Alloy configuration with error detection for:
- Unbalanced braces
- Duplicate component labels
- Empty component labels
- Unclosed string literals
- Missing attribute values
- Unknown component types (with warnings)

### Code Formatting
- Automatic formatting support for Alloy files
- Proper indentation of nested blocks
- Preserves comments and structure

### IntelliSense Support
- **Auto-completion** for common Alloy components:
  - `prometheus.scrape`, `prometheus.remote_write`, `prometheus.exporter.unix`
  - `loki.source.file`, `loki.write`
  - `otelcol.receiver.otlp`, `otelcol.exporter.otlp`
  - `discovery.kubernetes`, `discovery.file`
  - `local.file`
- **Auto-completion** for common attributes:
  - `forward_to`, `targets`, `endpoint`, `url`, `role`, `scrape_interval`, `log_level`
- **Hover documentation** for components

## Usage

1. Install this extension
2. Open or create a file with `.alloy` extension
3. Start writing your Grafana Alloy configuration
4. Enjoy syntax highlighting, validation, and IntelliSense!

### Example Configuration

```alloy
// Discover Kubernetes pods
discovery.kubernetes "pods" {
  role = "pod"
}

// Scrape metrics from discovered pods
prometheus.scrape "default" {
  targets = discovery.kubernetes.pods.targets
  forward_to = [prometheus.remote_write.default.receiver]
  scrape_interval = "15s"
}

// Send metrics to Prometheus endpoint
prometheus.remote_write "default" {
  endpoint {
    url = "http://localhost:9009/api/prom/push"
  }
}
```

## Formatting

To format your Alloy configuration:
- Right-click in the editor and select "Format Document"
- Use the keyboard shortcut: `Shift + Alt + F` (Windows/Linux) or `Shift + Option + F` (Mac)
- Enable "Format On Save" in VSCode settings for automatic formatting

## Configuration

The extension works out of the box with no additional configuration needed. Files with the `.alloy` extension are automatically recognized.

## About Grafana Alloy

Grafana Alloy is a vendor-neutral distribution of the OpenTelemetry Collector. It's a flexible, high-performance tool for collecting, processing, and forwarding telemetry data (metrics, logs, and traces) to observability backends.

For more information, visit the [Grafana Alloy documentation](https://grafana.com/docs/alloy/latest/).

## Contributing

Found a bug or have a feature request? Please open an issue on the [GitHub repository](https://github.com/chaluvadis/relax-theme-semantic-focus/issues).

## License

MIT - See [LICENSE](LICENSE) for details.
