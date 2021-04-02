import * as  Hapi from "@hapi/hapi";

const a={
    method: "GET",
    path: "/",
    handler: (request:Hapi.Request, h:Hapi.ResponseToolkit):any =>"Hello World!" 
  }
export default a;