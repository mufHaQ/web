// nested loop

let s = '';
for (let i = 5;i >= 1; i--) {
  for (let j = 1;j <= i; j++) {
    s+='*';
  }
  s += '\n';
}
console.log(s);