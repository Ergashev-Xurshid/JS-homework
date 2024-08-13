let massiv = [2, 3, 4, 7, 8];
let juftToq = true;
let s = 1;

for (let i = 1; i < massiv.length; i++) {
    if (massiv[i] % 2 === massiv[i - 1] % 2) {
        juftToq = false;
        s = i;
        break;
    }
}

if (juftToq) {
    console.log(1); 
} else {
    console.log(s);
}
