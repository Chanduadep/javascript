// let array=[1,2,3,35,78];
// const output=array.find((ele)=>ele>10);
// console.log(output);



// var student1=[1,2,3,4,5];
// var student2=[7,1,2,7,4,9];
// const ne=student1.concat(student2);
// console.log(ne);


// var fname=["mahesh","Ram","kiansh","shreya"];
// const names=fname.filter((num)=>num.length>=7);
// console.log(names);

// const fname=["mahesh","Ram","kiansh","shreya"]
// fname.forEach((student)=>console.log(student));

// const fname=["mahesh","Ram","kiansh","shreya","shreyansh"]
// const stud=fname.includes("shreyansh");
// console.log(stud);



 let checkAgeForLicense=(ages)=>{
    ages.forEach(age=>{
        if(age>18 && age<=60){
            console.log(`${age} Eligible for Driving Licence`)
        }
        else if(age<=17 || age>60){
            console.log(`${age} not eligible for driving license`)
        }
        else{
            console.log(`${age} Eligible for Learning License`)
        }
    })
   
};
const ages=[10,22,18,45,68];
checkAgeForLicense(ages);

