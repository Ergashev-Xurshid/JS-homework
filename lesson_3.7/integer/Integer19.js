let a = 230 ;
let boshi = Math.floor(230 / 100); 
let ortasi = Math.floor(a % 100)/10;
let oxiri = a % 10 ;

let yigindi = boshi + ortasi + oxiri ;
let kopayt = boshi * ortasi * oxiri ;  
console.log("yig'indisi :" , yigindi);
console.log("ko'paymasi :" , kopayt);