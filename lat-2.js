//Faktorial
function faktorial(n){
    if(n===0)
        return 1;
    return n*faktorial(n-1);
}
let n=5;
hasil=faktorial(n);
console.log ('faktorial '+n+'adalah' +hasil);

//Faktorial Rekursif Loop
function faktorialLoop(n) {
  let x = 1;
  for (let i = 1; i <= n; i++) {
    x *= i;
    console.log('Looping ke- '+i);
    console.log(x);
  }
    return x;
}

console.log("Looping:", faktorialLoop(5)); // 120

