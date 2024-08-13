let n = 19;
let k = 4;
let l = 7;
let mas = [];
for (let i = 3; i <= n; i++) {
  mas.push(i);
}

let sum = 0;
let sum1 = 0; 

for (let j = k; j <= l; j++) {
  sum += mas[j];
  sum1++;
}

let orta = 0;

if (sum1 > 0) {
  orta = sum / sum1;
}

console.log(orta);

