let a = 2 ;
let b = 6;
let s = 1 ;
for(a = a ; a <= b ; a++){
  if(a % 2 == 0){
    s += a**2; 
  }
}

console.log(s);