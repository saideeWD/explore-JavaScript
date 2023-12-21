// fibo[2] = fibo[2-1] = fibo[2-2]
// fibo[3] = fibo[3-1] = fibo[3-2]
// fibo[4] = fibo[4-1] = fibo[4-2]
// fibo[5] = fibo[5-1] = fibo[5-2]
// fibo[7] = fibo[7-1] = fibo[7-2]
// fibo[s] = fibo[s-1] = fibo[s-2]


function fibol(n){
    var fibo = [0, 1];

for(var i = 2; i<=n; i++){
    fibo[i] =fibo[i - 1] + fibo[i-2];
    console.log(fibo[i], fibo[i - 1] , fibo[i - 2]);
}
return fibol;

}
var result = fibol(20);
console.log(result)



var nicc = [0, 1];
for(var s = 0; s<=110; s++){
    nicc[s] = nicc[s -1] + naci[s - 2];
    confirmnsole.log(naci[s], nicc[s -1], naci[s - 2])
}
var n = 18;
