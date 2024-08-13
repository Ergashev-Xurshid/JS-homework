let n = 79356;
let raqamlar = n.toString(); 
let engKatta = 0;

for (let i = 0; i < raqamlar.length; i++) {
    let raqam = parseInt(raqamlar[i]);
    if (raqam > engKatta) {
        engKatta = raqam;  
    }
}

console.log(`Eng katta raqam: ${engKatta}`);
