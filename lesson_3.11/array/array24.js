let n = 19;
let mas = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, ];

if (n < 2) {
    console.log(0); 
} else {
    let r = mas[1] / mas[0]; 
    let Geomet = true;

    for (let i = 1; i < n - 1; i++) { 
      mas.push(i)
        if (mas[i + 1] / mas[i] != r) {
            Geomet = false;
            break;
        }
    }

    if (Geomet) {
        console.log(r); 
    } else {
        console.log(0);
    }
}
