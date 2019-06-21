var modules__properties = (function () {
    function getAppData() {
        return Spark.getProperties().getProperty("appData");
    }
    return {
        getAppData: getAppData
    };
})();
