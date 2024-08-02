let n = 345 ;
let ming = Math.floor(n/1000);
let yuz = (n/100)%10;
let on = Math.floor(n /10) % 10;
let bir = n%10;
let yigindi = ming + yuz + on + bir;
console.log(Math.round(yigindi));