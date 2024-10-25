function fizzbuzz(numero) {
    if (numero % 3  === 0 && numero %5 == 0 ) {
        console.log("fizzbuzz")
    } else if (numero %3 === 0 ) {
        console.log("Buzz")
    } else if ( numero % 5 === 0 ) {
        console.log("Fizz")
    }
}
for (let i = 1;  i < 100 ; i++) {
  
 
 fizzbuzz(i)
 console.log(i)   
}
