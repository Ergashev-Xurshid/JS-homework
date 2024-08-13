let son = "12112"
let one = 0 ;
let two = 0 ;

for (let i = 0; i < son.length; i++) {
  if (son[i] === '1') {
      one++;
  } else if (son[i] === '2') {
      two++;
  }
}

console.log(Math.min(one,two));