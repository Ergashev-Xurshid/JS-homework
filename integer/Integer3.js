let son = 765;
let son1= Math.floor(son / 100);
let son2 = Math.floor((son / 10) % 10);
let son3 = son % 10;

let yangi_son = son3*100 + son2*10 + son1;
console.log("Yangi hosil bo'lgan son:", yangi_son);