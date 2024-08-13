let n = 9 ;
let mas = [];
for( let i = 1 ; i <= n ; i++){
  mas.push(i);
}
console.log(`massiv elemetlar : ${mas}`);

for(let j = 1 ; j <= mas.length; j++){
  if (j < mas[mas.length - 1]){
    console.log(j);
    break;
  }
}

