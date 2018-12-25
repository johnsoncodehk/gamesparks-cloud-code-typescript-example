import * as Properties from "properties";

Spark.setScriptData("serverTime", Date.now());
Spark.setScriptData("appData", Properties.getAppData());
