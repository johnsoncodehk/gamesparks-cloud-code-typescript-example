interface AppData {
	version: string,
}

export function getAppData() {
	let appData: AppData = Spark.getProperties().getProperty("appData");
	return appData;
}
