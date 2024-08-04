let n = 3;
let i = 0;
let s = 0;
let k = 0;
for(i = 1 ; i <= n ; i++) {
  k = 1 + (i / 10);
  if (i % 2 == 0){
    s -= k ;
  }
  else {
    s += k ;
  }
}
console.log(`s = ${s.toFixed(1)}`);