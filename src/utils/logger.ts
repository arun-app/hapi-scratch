const colors = {
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",
  // Dim: "\x1b[2m",
  // Italic: "\x1b[3m",
  // Underline: "\x1b[4m",
  // BlinkSlow: "\x1b[5m",
  // RapidBlink: "\x1b[6m",
  // Reverse: "\x1b[7m",
  // Hidden: "\x1b[8m",
  // Strike: "\x1b[9m",

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
const date=new Date().toISOString();

const info = (message: string ) =>addLogger(message, infoName);

const error = (message: string ) => addLogger(message, errorName);

const warn = (message: string ) => addLogger(message, warnName);

const res = (message: string) => addLogger(message, successName);

const addLogger=(message:string, msgType:string)=>{
  return console.log(`${loggerName} ${date} ${msgType}   ${message}`)
}

const logger = {
  info,
  error,
  warn,
  res,
}
export default logger;