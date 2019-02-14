function module_properties_getAppData() {
    return Spark.getProperties().getProperty("appData");
}
var module_properties = {
    getAppData: module_properties_getAppData
};
