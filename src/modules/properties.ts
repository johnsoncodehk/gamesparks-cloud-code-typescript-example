interface AppData {
	version: string,
}

export function getAppData() {
	return Spark.getProperties().getProperty("appData") as AppData;
}