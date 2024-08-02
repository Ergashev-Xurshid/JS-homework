let n = 345 ;
let ming = Math.floor(n / 1000);
let yuz = Math.floor((n / 100) % 10);
let on = Math.floor((n / 10) % 10);
let bir = n % 10;
let yigindi = 0;

if (ming % 2 == 1){
  yigindi += ming ;
} 
if (yuz % 2 == 1) {
 yigindi += yuz;
}
if (on % 2 == 1) {
  yigindi += on;
}
else if (bir % 2 == 1) {
  yigindi += bir;
}

console.log(yigindi);



