let n = 4 ;
let x = 3 ;
let sum= 0; 

for (let i = 0 ; i <= n ; i++){
  let f = 1;
  for(let j = 1 ; j <= 2 * i ; j++){
    f *= j ;
  }
  let n =Math.pow(x,2*i);
  let t = (-1)**i * (n/f);
  sum += t ;
}
console.log(sum);
console.log(Math.cos(x));