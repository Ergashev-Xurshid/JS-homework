let a = 5;
let b = 89;
let c = 10;

if ((a < b && a > c) || (a > b && a < c)) {
  console.log(a);
}
else if ((b < a && b > c) || (b > a && b < c)){
  console.log(b);
}
else if ((c > a && c < b) || (c < a && c > b)){
  console.log(c);
}