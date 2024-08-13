let n = 6 ;
let s = 0 ;
for ( let i = 1 ; i < n ; i++){
  if (n % i == 0 ){
    s += i ;
  }
}

if (n == s ){
  console.log("Mu son mukammal");
}
else{
  console.log("Mu son mukammalemas");
}