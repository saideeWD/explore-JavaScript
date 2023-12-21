function isLepYear(year){
   
const reminder = year % 4;
console.log(reminder==0);
if(reminder==0){
   return true;
}
else{
    return false;
}
}


const isLep= isLepYear(200000);
console.log(isLep);