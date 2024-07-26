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