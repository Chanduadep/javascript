var num=[1,2,3,4,5,6,7];
var target=5;
var index=[];
function findAddOfFive(index,target){
    for(let i=0;i<=num.length;i++){
        for(let j=i+1;j<num.length;j++){
            if(num[i]+num[j]==target){
                index.push([num[i],num[j]]);
            }
        }
    }
    return index; 
 }
    
let output=findAddOfFive(index,target);
console.log(output);

// var num=[4,3,6,5,2,8,9];
// var target=10;
// var index=[];
// function findAddOfFive(index,target){
//     for(let i=0;i<=num.length;i++){
//         for(let j=i+1;j<num.length;j++){
//             if(num[i]+num[j]==target){
//                 index.push([num[i],num[j]]);
//             }
//         }
//     }
//     return index; 
//  }
    
// let output=findAddOfFive(index,target);
// console.log(output);

for(var i=0;i<3;i++){
    for(j=0;j<3;j++){
        console.log(i,"i",j,"j");
    }
}

var todos = ["eat breakfast", "eat lunch", "eat dinner"];

function deleteTodo(todos,index) {
// console.log(index)
    todos.splice(index, 1,"eat Something")
    return todos;
}

const result = deleteTodo(todos,2);
console.log(result);