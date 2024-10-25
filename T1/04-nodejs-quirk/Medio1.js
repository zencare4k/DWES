function invert(obj) {
    return Object.fromEntries(Object.entries(obj).map(([a, b]) => [b, a]))

}
console.log(invert({a: 1, b: 2, c: 3}));



