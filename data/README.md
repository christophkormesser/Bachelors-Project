# Data

## Test Run

1. Start ansible script to setup and start cluster
2. Start metric gathering script for 25 minutes
3. Start minikube tunnel
4. Go to directory of environment (e.g. data/vanilla)
5. Start jmeter `jmeter -n -t ../HTTP\ Request.jmx -l results.jtl` – run for 20 minutes
6. After successful test run, create plot `jmeter -g results.jtl -o ./graph`
7. Remove node metrics, which are out of time range
