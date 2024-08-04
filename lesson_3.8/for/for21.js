let n = 3 ;
let s = 0 ;
let k = 1
for(let i = 1; i <=n ; i++){
  k *= i;
  s += 1/k;
}
console.log(`yig'indi = ${s}`);