"use strict";
function module_main_setResult(result) {
    Spark.setScriptData("date", Date.now());
    Spark.setScriptData("result", result);
}
