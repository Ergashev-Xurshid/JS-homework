let massiv = [2, 6, 18, 54];
let geometrik = true;
let maxraj = massiv[1] / massiv[0];

for (let i = 2; i < massiv.length; i++) {
    if (massiv[i] / massiv[i - 1] !== maxraj) {
        geometrik = false;
        break;
    }
}

if (geometrik) {
    console.log(maxraj);
} else {
    console.log(0); 
}
