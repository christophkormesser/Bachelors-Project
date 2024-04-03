# Data

## What happens here?

1. Metrics like cpu usage and memory usage are collected by prometheus and exported to `/metrics`
2. After the metrics have been collected, the applications are stopped so cluster activity is reduced to a minimum so metric and trace collectors are relieved
3. Traces are fetched and saved to `/traces/raw` starting with the same timestamp and ending with the same ending timestamp from the metrics, though with a limit to 160.000 traces, due to the response size causing issues while fetching
4. These traces are processed and saved to `/traces/processed` by stripping data that's not needed to keep the data set slim and easier to work with
5. The processed data is then used to calculate the average, min & max response times which is then saved to `/traces/averages`

## Files

### Set A1

* node_metrics-1712003058.json
* traces_1712003058.json
  * mtls enabled (STRICT mode)
  * authorization policy set (all traffic is allowed)

### Set A2 (same configs as Set 1)

* node_metrics-1712092645.json
* traces_1712092645.json
  * mtls enabled (STRICT mode)
  * authorization policy set (all traffic is allowed)

### Set A3 (same config as Set 1 & 2)

* node_metrics-1712093943.json
* traces_1712093943.json
  * mtls enabled (STRICT mode)
  * authorization policy set (all traffic is allowed)

### Set B1

*
*
  * mtls disabled
  * authorization policy unset

### /archived

* istio-mtls-traces.json
  * mtls enabled (STRICT mode)
  * authorization policy enabled (only app1 authorized to call app2)
* istio-no-mtls-traces.json
  * mtls disabled (DISABLE mode)
  * authorization policy removed (all traffic is allowed)

## Folder structure

### /examples

* Small portions of raw data to understand the general structure better for processing

### /traces/raw

Exported unprocessed data

### /traces/processed

Processed data, ready for visualization/calculations

### /traces/averages

Calculated average and min/max durations for all three combinations (app1, app2 / app2, app2 / app3, app2)

### .../archived

Data that I no longer perceive as relevant, but might be interesting anyways
