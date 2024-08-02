let n = 43;
let bosh = Math.floor(n/10);
let oxiri= (n % 10);
let son = oxiri*10 + bosh;
if (son <=n){
  console.log(true);
}
else{
  console.log(false);
}