function AdivinarNumero(numero) {
    const numeroMaquina = Math.floor(Math.random()* 100)
    if (numeroMaquina === numero ) {
        console.log("Felicidades has acertado el numero")
    } else{
        console.log("Vaya manco, no has acertado el numero.")
        console.log("El numero de la maquina era " + numeroMaquina)
    }
}

AdivinarNumero(1)