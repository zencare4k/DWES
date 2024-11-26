const fibonacci = (n) => {
    if (n <= 1) return n
    return fibonacci(n - 1) + fibonacci(n-2)
}

const getFibonacci = (req, res) => {
    const num = parseInt(req.query.num, 10)
    if (isNaN(num) || num < 0) {
        return res.status(400).json({
            error: 'Invalid input, Please provide a positive integer. '
        })
    }
    const result = fibonaci(num)
    res.json({fibonacci: result})
}

module.exports = { getFibonacci }

