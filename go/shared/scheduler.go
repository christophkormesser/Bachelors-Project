package shared

import "time"

func StartScheduler(interval time.Duration, task func()) {
	ticker := time.NewTicker(interval)
	defer ticker.Stop()

	for {
		<-ticker.C
		task()
	}
}
