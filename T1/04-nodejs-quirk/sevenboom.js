function sevenboom(num) {
    for (let i = 0; i <= num; i++) {
        if (num %7 === 0 || i.toString().includes('7')) {
            console.log("Boom");
        } else {
            console.log(i);
            
        }
        
    }
}


sevenboom(200)