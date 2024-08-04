let n = 3;
let i = 0;
let s = 1;
let k = 0;
for(i = 1 ; i <= n ; i++) {
  k = 1 + (i * 0.1);
  s*= k ;
}

console.log(`s = ${s}`);