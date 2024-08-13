let n = 10 ;

let a = 0 ;
let b = 1 ;
let f = 0 ;

if (n === 1) {
  f = a;
}
else if (n === 2 ) {
  f = b ;
}
else {
  for( let i = 3 ; i <= n ; i++){
    f = a+b ;
    a = b;
    b = f;
  }
}
console.log(f);