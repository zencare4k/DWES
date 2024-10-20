function date() {
    const now = new Date(); // Agregar esta línea para obtener la fecha y hora actuales

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedTime = `${hours}-${minutes}-${seconds}`; // Espacio extra después del guion eliminado

    console.log(formattedTime);
}

setInterval(date, 1000);
