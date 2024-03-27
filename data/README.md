# Data

## What happens here?

1. Metrics are gathered and exported by Prometheus and Jaeger.
2. Exported data is processed
3. Processed data is visualized

## Folder structure

### /examples

* Small portions of raw data to understand the general structure better for processing

### /raw

Exported unprocessed data

* istio-mtls-traces.json
  * mtls enabled (STRICT mode)
  * authorization policy enabled (only app1 authorized to call app2)
* istio-no-mtls-traces.json
  * mtls disabled (DISABLE mode)
  * authorization policy removed (all traffic is allowed)

### /processed

* Processed data, ready for visualization
