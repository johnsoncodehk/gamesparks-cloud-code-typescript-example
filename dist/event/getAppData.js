"use strict";
require("properties");
Spark.setScriptData("serverTime", Date.now());
Spark.setScriptData("appData", module_properties.getAppData());
