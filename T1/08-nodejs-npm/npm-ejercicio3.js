const colors = require('colors')

function imprimirHorayFecha() {
    const now = new Date()

    const day = String(now.getDate()).padStart(2, '0')

    const month = String(now.getMonth() + 1).padStart(2, '0')

    const year = now.getFullYear()

    const hours = String(now.getHours()).padStart(2, '0')

    const minutes = String(now.getMinutes()).padStart(2, '0')

    const seconds = String(now.getSeconds()).padStart(2, '0')

    const formattedDate = `${day}-${month}- ${year}`
    const formattedTime = `${hours}-${minutes}- ${seconds}`

    if (now.getSeconds() % 10 === 0) {
        console.log(`${formattedDate} ${formattedTime.green}`);
        
    } else {
        console.log(`${formattedDate} ${formattedTime}`);

    }
}

setInterval(imprimirHorayFecha, 1000)