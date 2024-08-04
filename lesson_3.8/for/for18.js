let n = 4;
let a = 2;
let s = 0;
let yigindi = 0;
for (let i = 0; i <= n; i++) {
  let daraja = Math.pow(a, i);
  if (i % 2 === 0) {
      yigindi += daraja;
  } else {
      yigindi -= daraja;
  }
  console.log(`yig'indi ${yigindi}`);
}
console.log(`yig'indi ${yigindi}`);