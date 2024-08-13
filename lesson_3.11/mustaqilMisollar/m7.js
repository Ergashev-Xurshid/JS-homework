let n = 10; // Bu yerda n sonini o'zgartiring

for (let num = 2; num <= n; num++) {
  let son = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      son = false;
      break;
    }
  }

  if (son) {
    console.log(num);
  }
}
