import * as Hapi from "@hapi/hapi";
import plugins from "./plugin";
import {Logger} from "./utils";
import routes from "./routes";

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });
  
  await server.register(plugins);

  server.route(routes)
  
  await server.start();

  Logger.info(`Server running on ${server.info.uri}`)

  server.events.on('response', function (request) {
    Logger.res(request.method.toUpperCase() + ' ' + request.path+ ' ' +request.raw.res.statusCode)
});
};

process.on("unhandledRejection", (err) => {
  Logger.error(`${err}`);   
  process.exit(1);
});

init();
