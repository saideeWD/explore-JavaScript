function facktroul(n){
    if(n==0)
    return 1;
    else{
        return n * facktroul(n-1);
    }


}
var rsult = facktroul(10);
console.log(rsult)

function fivr (n){
    if(n==0){
        return 1;
    }
    else{
        return n * facktroul(n-1)
    }
}
var total = fivr(10);
console.log(total)


// !5 =1*2*3*4*5
// !8= (8-1) !*8

for(var i = 2; i <=10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    console.log(fibo[i], fibo[i-1],fibo[1-2]);
}