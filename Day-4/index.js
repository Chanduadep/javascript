function checkIsUserValidForDl(age){
    if(age>18 && age<=60){
        console.log("Eligible for Driving License for age of",age);
    } else if(age<=17 || age>60){
        console.log("Not Eligible for Driving License for age of",age)
    } else{
        console.log("Eligible for Learning License for age of",age)
    }
}
checkIsUserValidForDl(18);