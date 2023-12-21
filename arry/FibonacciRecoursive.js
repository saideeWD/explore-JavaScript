function fibonicc(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    else{

        return fibonicc(n - 1) + fibonicc(n - 2);
    }
}
var result = fibonicc(10);
console.log(result);


function saide(s){
    if(s==0){
        return s;
    }
    if(s==1){
        return 1;
    }
    else{
        return saide( s - 1) + saide(s - 2);
    }
}
var total = saide(12)
console.log(total)