let n = 3 ; 
let x = 2 ;
let son = 0 ;

 for (let i = 0; i <=n ; i++){
  let s = 0;
  s += Math.pow(x,i);
  let fk = 1 ;
  for(let j = 1;j <= i ; j++ ){
    fk = fk * j  ; 
  }
  son += s / fk ;
 }
 console.log(son);
