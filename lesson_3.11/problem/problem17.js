let n = 3423765;
let raqamlar = n.toString(); 

let k = 7;
let s = 0 ;

for (let i = 0; i < raqamlar.length; i++) {
    let raqam = parseInt(raqamlar[i]);

    if (k > raqam) {
        s += raqam;
    }
}

console.log(s);  

