let a = 4 ;
let b = 10;
let s = 0;

for(a = a ; a <= b ; a++){
  if(a % 2 == 0){
    s += a;
  }
}

console.log(s);