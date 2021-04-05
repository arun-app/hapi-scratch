import * as Hapi from "@hapi/hapi";

const colors = {
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",

  FgBlack: "\x1b[30m",
  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
  FgYellow: "\x1b[33m",
  FgBlue: "\x1b[34m",
  FgMagenta: "\x1b[35m",
  FgCyan: "\x1b[36m",
  FgWhite: "\x1b[37m",

  BgBlack: "\x1b[40m",
  BgRed: "\x1b[41m",
  BgGreen: "\x1b[42m",
  BgYellow: "\x1b[43m",
  BgBlue: "\x1b[44m",
  BgMagenta: "\x1b[45m",
  BgCyan: "\x1b[46m",
  BgWhite: "\x1b[47m",
}

const loggerName = `${colors.Bright}[Logger]${colors.Reset}`;
const infoName = `${colors.FgBlue}[INFO]${colors.Reset}`;
const errorName = `${colors.FgRed}[Error]${colors.Reset}`;
const warnName = `${colors.FgYellow}[Warning]${colors.Reset}`;
const successName = `${colors.FgGreen}[Success]${colors.Reset}`;
const responseName=`${colors.FgCyan}[Response]${colors.Reset}`;
const date=new Date().toISOString();

const info = (message: string ) =>addLogger(message, infoName);

const error = (message: string ) => addLogger(message, errorName);

const warn = (message: string ) => addLogger(message, warnName);

const ok = (message: string) => addLogger(message, successName);

const res = (request: Hapi.Request) =>{

const method=`${colors.FgCyan}${request.method.toUpperCase()}${colors.Reset}`;
const statusCode=`${colors.FgCyan}${request.raw.res.statusCode}${colors.Reset}`;

return addLogger(`${method} ${request.path} ${statusCode}`,responseName);
};

const addLogger=(message:string, msgType:string)=>{
  return console.log(`${loggerName} ${date} ${msgType}   ${message}`)
}

const logger = {
  info,
  error,
  warn,
  res,
  ok
}
export default logger;