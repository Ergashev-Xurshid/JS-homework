let n = 5 ;
let s = true;
for( let i = 2 ; i < n ; i++ ){
  if(n % i == 0 ){
    s = false;
    break;
  }
}

if (s){
  console.log("tub");
}
else{
  console.log("tub emas");
}