# Data

## Test Runs

### No activity (done)

1. Start ansible script to setup and start cluster
2. Start metric gathering script for 10 minutes
3. Get metric averages

### Vanilla

1. Start ansible script to setup and start cluster
2. Start minikube tunnel
3. Start Warm up jmeter `jmeter -n -t ../HTTP\ Warmup.jmx -Jusers=1 -Jduration=1`

4. !!! Change ENVS!!
5. Start Ansible test script
    * Start metric gathering script for 55 minutes
    * Go to directory of environment (e.g. data/vanilla)
    * Start jmeter `jmeter -n -t ../HTTP\ Request.jmx -Jusers=10 -Jduration=10 -l results-10.jtl`
        * run for 10 minutes

6. After successful test run, create plot `jmeter -g results.jtl -o ./graph`
7. Remove node metrics, which are out of time range