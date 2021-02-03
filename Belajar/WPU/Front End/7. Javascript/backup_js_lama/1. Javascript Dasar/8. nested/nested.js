// PENGULANGAN & PENGKONDISIAN BERSARANG pada JAVASCRIPT

var s = '';
for (var i = 10; i > 0; i--){
    for (var j = 0; j < i; j++){
        s += '*';
    }
    s += '\n';

    // s += '*';
}
console.log(s);