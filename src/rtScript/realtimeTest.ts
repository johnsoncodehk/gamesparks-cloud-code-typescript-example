import * as HelloRealtime from "helloRealtime";

RTSession.onPacket(100, function(packet){
    RTSession.getLogger().info(HelloRealtime.sayHello());
});
