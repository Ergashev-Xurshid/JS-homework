let n = 9 ;
let mas = [];
for( let i = 1 ; i <= n ; i++){
  mas.push(i);
}
console.log(`massiv elemetlar : ${mas}`);

let juftMas = [];
let toqMas = [];

for ( let i = 1 ; i <= mas.length ; i++){
  if (i % 2 == 0){
    juftMas.push(i);
  }
  else{
    toqMas.push(i);
  }
}

console.log(`juftlari  ${juftMas}`);
console.log(`toqlari  ${toqMas.reverse()}`);