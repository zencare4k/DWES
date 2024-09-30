function OddishEvenish(num) {
    const sum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    return sum % 2 === 0 ? 'Evenish' : 'Oddish';
}
console.log(OddishEvenish(22));
console.log(OddishEvenish(23));
