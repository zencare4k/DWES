import chalk from 'chalk'
function randomcolor() {
    const palabras = ["blue", "red", "green", "yellow"]
    const colors = [
        chalk.red,
        chalk.blue,
        chalk.green,
        chalk.yellow
    ]
    return colors[Math.floor(Math.random()* colors.length)]

}
palabras.forEach(palabra => {
    const color = randomcolor();
    console.log(color(palabra))
});
