let son = 345;
let son1= Math.floor(son / 100);
let son2 = Math.floor((son / 10) % 10);
let son3 = son % 10;
let yangi_son = son2*100 + son1*10 + son3 ;
console.log(yangi_son);