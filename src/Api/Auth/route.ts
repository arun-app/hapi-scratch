import * as Hapi from "@hapi/hapi";

const UserRoute = [ {
  method: "GET",
  path: "/a",
  options: {
    tags: ["api", "a"]
  },
  handler: (request: Hapi.Request, h: Hapi.ResponseToolkit): any => "Hello a!"
}]

export default UserRoute;