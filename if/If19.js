let n = 56987 ;
let son1 = Math.floor(n/10000);
let son2 = Math.floor(n/1000)%10;
let son3 = Math.floor(n/100)%10
let son4 = Math.floor(n/10)%10
let son5 = Math.floor(n%10)

if (son1 > son2 && son1>son3 && son1>son4 && son1>son5  ){
  console.log(son1);
}
else if (son2 > son1 && son2>son3 && son2>son4 && son2>son5  ){
  console.log(son3);
}
else if (son3 > son1 && son3>son2 && son3>son4 && son3>son5  ){
  console.log(son3);
}
else if (son4 > son1 && son4>son2 && son4>son3 && son4>son5  ){
  console.log(son4);
}
else if (son5 > son1 && son5>son2 && son5>son3 && son5>son4  ){
  console.log(son5);
}