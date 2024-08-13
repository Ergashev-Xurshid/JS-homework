let n = 28 ;

for ( let i = 1 ; i <= n ; i++){
  let s = 0 ;
  for( let j = 1 ; j < i; j++ ){
    if (i % j == 0){
      s += j;
    }
  }
  if ( i == s ){
    console.log(`mukammal son ${i}`);
  }
}
