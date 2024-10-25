
function imprimirHorayFecha() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedTime = `${hours}-${minutes}-${seconds}`;

    
        console.log(`${formattedTime}`);
    
}

setInterval(imprimirHorayFecha, 1000);
