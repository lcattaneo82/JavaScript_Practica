import * as winston from 'winston';

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [new winston.transports.Console(),
    new winston.transports.File({
        filename: "logs/example.log",
      }),],
  
});

export default logger