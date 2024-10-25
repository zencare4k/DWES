function toArray(objeto) {
    let keys =  Object.keys(objeto)
    let values = Object.values(objeto)
    return [keys, values]
}
console.log(toArray({a: 1, b: 2, c: 3}));
