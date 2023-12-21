
function isleper(year){
    const reminder = year % 4;
    console.log(reminder==0);
    if(reminder==0){
        return  true;

    }
    else{
        return false;
    }
}



let price = isleper(2000);
console.log(price)
