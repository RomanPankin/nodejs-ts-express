import { format, createLogger, transports } from 'winston';

const { combine, timestamp, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

export const logger = createLogger({
  level: 'debug',
  format: combine(timestamp(), customFormat),
  transports: [new transports.Console()]
});
