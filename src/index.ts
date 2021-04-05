import * as Hapi from "@hapi/hapi";
import Plugins from "./plugin";
import {Logger} from "./utils";
import Routes from "./routes";

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });
  
  await server.register(Plugins);
  server.route(Routes)
  
  await server.start();

  Logger.info(`Server running on ${server.info.uri}`)

  server.events.on('response', function (request) {
    Logger.res(request)
});
};

process.on("unhandledRejection", (err) => {
  Logger.error(`${err}`);   
  process.exit(1);
});

init();
