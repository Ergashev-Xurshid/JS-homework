let N = 1000; 

for (let i = 1; i <= N; i++) {
    let sum1 = 0;
    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            sum1 += j;
        }
    }

    if (sum1 > i) { 
        let sum2 = 0;
        for (let k = 1; k < sum1; k++) {
            if (sum1 % k === 0) {
                sum2 += k;
            }
        }

        if (sum2 === i) {
            console.log(i + " va " + sum1 + " do'st sonlar.");
        }
    }
}