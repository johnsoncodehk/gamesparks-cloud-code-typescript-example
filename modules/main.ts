export function setResult(result: any) {
	Spark.setScriptData("date", Date.now());
	Spark.setScriptData("result", result);
}
