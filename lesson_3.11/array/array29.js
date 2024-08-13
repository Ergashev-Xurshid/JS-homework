let massiv = [4, 9, 2, 7, 6];
let max = massiv[1];

for (let i = 1; i < massiv.length; i += 2) {
    if (massiv[i] > max) {
        max = massiv[i];
    }
}

console.log(max);