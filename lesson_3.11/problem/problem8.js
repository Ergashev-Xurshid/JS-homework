let a = 2 ;
let b = 3 ;
let c = 4 ;

  if(a == b && b == c && a == c ){
    console.log(" teng tomonli");
  }
  else if( (a == b && a !== c ) ||(b == c && b !== a ) ||(c == a && c !== b ) ){
    console.log("teng yonli");
  }
  else {
    console.log("turli tomonli");
  }
