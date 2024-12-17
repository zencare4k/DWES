const logger = (req, res, next) => {
const currntTime = new Date().toISOString()
console.log(`[${currntTime}] ${req.method} ${req.url}`) ;
}

module.exports = logger