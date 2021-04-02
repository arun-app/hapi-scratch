import * as Hapi from "@hapi/hapi";
import * as HapiSwagger from "hapi-swagger";
import * as Inert from "@hapi/inert";
import * as Vision from "@hapi/vision";

import { swaggerOptions,statusMonitor } from "../config";

const plugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
  {
    plugin: Inert,
  },
  {
    plugin: Vision,
  },
  {
    plugin: HapiSwagger,
    options: swaggerOptions,
  },
  {
    plugin: require("hapijs-status-monitor"), // it has no typescript module
    options: statusMonitor,
  },
];
  console.log("Plugin Registration Successful");  
export default plugins;
