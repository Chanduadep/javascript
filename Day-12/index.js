// const studentData=
// {
//     name:"chandana",
//     age:19,
//     isGraduated:true,
//     grades:["A","A","A","A","A","A+"],
//     std:{january:"Present",february:"partially"}
// };
// console.log(studentData);
// console.log(studentData.grades[studentData.grades.length-1]);


// const myObject=
// {
//     name:"mehar",
//     age:19,
//     study:"BscIT"
// };

// console.log(myObject.age);
// console.log(myObject['study']);
// myObject.grade="A+";
// console.log(myObject);
// myObject['location']="Bhiwandi";
// console.log(myObject);


// const student = new Object();
// student.name = "Dhaval";
// student.surname = "abc";
// student['age'] = 20;
// console.log(student);

// const myObject=
// {
//     name:"mehar",
//     age:19,
//     study:"BscIT"
// };
// for(let key in myObject){
//     console.log(key,myObject[key]);
// }


// console.log(Object.keys(myObject));
// console.log(Object.values(myObject));

// Q Given an string find out numbers of repetation for single lette.

// var string="chandana";
// function findDuplicates(string){
//     var output={};
//     // console.log(string,"string");
//     for(let i=0;i<string.length;i++){
//         // console.log(string[i]);
//         if(output[string[i]]== undefined){
//             output[string[i]]=1;
//         }else{
//             output[string[i]]++;
//         }
//     }
//     console.log(output);
// }
// findDuplicates(string);

//Q Given an string find out numbers of repetation for single letter and return a letter which having most of reperation .

var string="bhavana";
function findDuplicates(string){
    var output={};
    var largeCount=0;
    var repeatedLetter='';
    for(let i=0;i<string.length;i++){
        if(output[string[i]]==undefined){
            output[string[i]]=1;
        }else{
            output[string[i]]++;
        }
        if(output[string[i]]>largeCount){
            largeCount=output[string[i]];
            repeatedLetter=string[i];
        }
    }
    return {repeatedLetter,largeCount};
}
let result=findDuplicates(string);
console.log(`The most repeated letter is '${result.repeatedLetter}'
     and it appears ${result.largeCount} times.`);