package shared

import "os"

func EnvHandler(envVars []string) map[string]string {

	// Initialize a map with default values
	envMap := make(map[string]string)
	for _, v := range envVars {
		envMap[v] = "!not found!"
	}

	// Try to find each environment variable and update the map accordingly
	for _, v := range envVars {
		if val, ok := os.LookupEnv(v); ok {
			envMap[v] = val
		}
	}

	return envMap
}
