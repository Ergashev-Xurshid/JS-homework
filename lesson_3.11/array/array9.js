let n = 9 ;
let mas = [];
for( let i = 1 ; i <= n ; i++){
  mas.push(i);
}
console.log(`massiv elemetlar : ${mas}`);

let newMas = [];

for ( let i = 1 ; i <= mas.length ; i++){
  if (i % 2 == 0){
    newMas.push(i);
  }
}

console.log(`natija ${newMas.reverse()} juftlarining soni ${newMas.length}`);
