const chalk = require('chalk');

 const message = "This is my very long line that eslint should check as an error ............................................";

 function MyFunction(used) {
    if (used) {
    console.log(used);
        return
    }
 }

 module.exports = {MyFunction};