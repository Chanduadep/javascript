
//    let  array=[1,2,3,4,5,6,7,8,9];
//    function findEvenCountFromArray(array){
//    let count=0;
//    for(let i=0;i<=array.length-1;i++){
//     // console.log(i,array[i]);
//     if(array[i]%2==0){
//         count=count+array[i];
//     }

//    }
//     // console.log("count",count);
//     return count;
// }
// const output=findEvenCountFromArray(array);
// console.log("count",output);

// let peoples=["rajesh","mishra","vinod"];
// peoples.push("shriya");
// peoples.push("chandu","bhavesh")
// console.log(peoples);

// let subjects=["Maths","Science","Politics","History","English"]
// subjects.pop();
// console.log(subjects);

// let subjects=["Maths","Science","Politics","History","English"]
// subjects.shift();
// console.log(subjects);


// let subjects=["Maths","Science","Politics","History","English"]
// subjects.unshift("Hindi");
// console.log(subjects);

// let subjects=["Maths","Science","Politics","History","English"];
// // console.log(subjects.slice());
// console.log(subjects.slice(1));
// console.log(subjects.slice(4));
// console.log(subjects.slice(1,4));
// console.log(subjects.slice(2,-2));
// console.log(subjects.slice(3,-2));
// console.log(subjects.slice(-2));

// let subjects=["Maths","Science","Politics","History","English"];
// // subjects.splice(2,0,"Marathi");
// // subjects.splice(2,1,"Marathi");
// // subjects.splice(4,1,"Economics");
// subjects.splice(2,0,"Politics");
// console.log(subjects);

// var students = ["rahul", "nehal", "ali", "amod", "adep"];
// var target="adep";
// var index=students.indexOf(target);
// console.log("output",index);

// var students = ["rahul", "nehal", "ali", "amod", "adep"];
// var target="nehal";
// // let index=-1;
// for(i=0;i<students.length;i++){
//     if(students[i]==target){
//         // index=i;
//         // break;
//         console.log("output:",i);
//     }
// }
// // console.log("output:",index);

var students = ["rahul", "nehal", "ali", "amod", "adep"];
var target = "adep";
function findOutIndex(students) {

    for (i = 0; i < students.length; i++) {
        if (students[i] === target) {

            return i;
        }
    }
    return -1;//if target is not found
}
const output = findOutIndex(students);
console.log("output:", output);

