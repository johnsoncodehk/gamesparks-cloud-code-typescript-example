requireOnce("say");
var hello = modules__say.hello;
var world = modules__say.world();
Spark.setScriptData("message", hello + " " + world + "!"); // Hello World!
