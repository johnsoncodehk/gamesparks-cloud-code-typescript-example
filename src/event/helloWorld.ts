import * as Say from "say";

const hello = Say.hello;
const world = Say.world();

Spark.setScriptData("message", `${hello} ${world}!`); // Hello World!
