const winston = require('winston')

const customFormat = winston.format.printf(({})=> {
    return `${timestamp} [&{level.toUpperCase()}: &{message}`

})

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        customFormat
    ),
    transports: [
        new winston.transports.Console()
    ]
})

module.exports = logger 