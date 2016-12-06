let narNumbers = [];
let limit = 1000000;

for(let i = 0; i <= limit; i++){
    var strNum = i+'';
    var exp = strNum.length;
    var e = exp;
    var r = 0;
    while(--e > -1){
        typeof strNum[e] !== 'undefined' && (r += Math.pow(+strNum[e], exp));
    }
    r == i  && narNumbers.push(r);
}

console.log("Los números narcicistas de 0 a " + limit + '(base 10) son:');
narNumbers.forEach((n, i) => { console.log((i + 1) + '- ' + n); });