import * as HapiSwagger from "hapi-swagger";

const swaggerOptions: HapiSwagger.RegisterOptions = {
    info: {
      title: 'API Documentation',
      version: 'v1.0.0',
      contact: {
        name: 'Applogiq',
        email: 'arun.s.applogiq@gmail.com',
      },
    },
    grouping: 'tags',
    sortEndpoints: 'ordered',
    documentationPath: '/documentation',
    // securityDefinitions: {
    //   'jwt': {
    //     'type': 'apiKey',
    //     'name': 'Authorization',
    //     'in': 'header',
    //     'x-keyPrefix': 'Bearer '
    //   }
    // },
    // security: [{ jwt: [] }], // THIS WAS THE KEY. Without this, the Authorization headers are never sent, but with them they are!
  }

export default swaggerOptions;