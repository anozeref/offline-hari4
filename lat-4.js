var arr=['ade','asep', 'agus'];
var i=0;
while (i<3) {
    console.log (arr[i]);
    console.log (arr.join(' '));
    arr.pop();
    arr.push('hendar');
    arr.pop();
    i++;
}