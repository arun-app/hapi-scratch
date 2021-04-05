import * as  Hapi from "@hapi/hapi";

const UserRoute = [ {
  method: "GET",
  path: "/users",
  options: {
    tags: ["api", "Users"]
  },
  handler: (request: Hapi.Request, h: Hapi.ResponseToolkit): any => "Hello a!"
}]
export default UserRoute;