// var arr=[65,50,12,35,75];
// var arr2=[];
// var i=0;
// while (i<5) {
//     if(arr[i]>70){
//      arr2.push('Lulus');
//     }
//     else arr2.push('Tidak Lulus');
//     i++;
// }
//     console.log (arr.join(', '));
//     console.log (arr2.join(', '));

var bil = [];
var gen = [];
var ganj = [];
for (var e= 0;e<20;e++) {
    bil.push(e+1);
}
var x = 0;
while (x < 20) {
    if (bil[x] % 2 == 0) {
        gen.push(bil[x]);
    } else {
        ganj.push(bil[x]);
    }
    x++;
}

console.log("Genap: " + gen.join(', '));
console.log("Ganjil: " + ganj.join(', '));
