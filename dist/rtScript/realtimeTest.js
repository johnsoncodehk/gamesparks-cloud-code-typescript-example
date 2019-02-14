"use strict";
var HelloRealtime = require("helloRealtime");
RTSession.onPacket(100, function (packet) {
    RTSession.getLogger().info(HelloRealtime.sayHello());
});
