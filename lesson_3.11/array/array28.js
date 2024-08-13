let massiv = [4, 3, 2, 7, 6];
let min = massiv[0];

for (let i = 0; i < massiv.length; i += 2) {
    if (massiv[i] < min) {
        min = massiv[i];
    }
}

console.log(min)