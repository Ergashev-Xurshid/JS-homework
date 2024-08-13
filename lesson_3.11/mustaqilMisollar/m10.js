let n = 3 ;
let y = 1 ;
let s = Math.pow(2,n);
console.log(`2 ning n inchi darajasi : ${s}`);
for( let i = 1 ; i <= n ; i++){
  y *= i ;
}

console.log(`${n}! teng : ${y}`);