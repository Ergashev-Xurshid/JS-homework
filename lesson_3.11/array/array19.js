let n = 19;
let mas = [];
for (let i = 3; i <= n; i++) {
  mas.push(i);
}

for (let j = 0; j < mas.length; j++) {
  if (mas[0] < mas[j] && mas[j] < mas[mas.length - 1]) {
    console.log(mas[j]);
    break;
  }
}
