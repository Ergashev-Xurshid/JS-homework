let n = 19;
let k = 4;
let l = 7;
let mas = [];
for (let i = 3; i <= n; i++) {
  mas.push(i);
}

let sum = 0;

for (let j = 0; j < mas.length; j++) {
  if (mas[k] < mas[j] && mas[j] < mas[l]) {
    sum += mas[j]; 
  }
}

console.log(sum);  
