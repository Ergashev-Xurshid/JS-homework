let massiv = [-1, 2, -3, 4, -5];
let musbatManfiy = true;
let indeks = 1;

for (let i = 1; i < massiv.length; i++) {
    if ((massiv[i] > 0 && massiv[i - 1] > 0) || (massiv[i] < 0 && massiv[i - 1] < 0)) {
        musbatManfiy = false;
        indeks = i;
        break;
    }
}

if (musbatManfiy) {
    console.log(1); 
} else {
    console.log(indeks); 
}
