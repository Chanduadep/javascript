// Q Give an aray, do addition of numbers by using while loop .

let numbers=[2,4,7,9,4,1,3,8];
function sumOfArrayNumbers(numbers){
    sum=0;
    i=0;
    while(i<numbers.length){
        // console.log(numbers[i]);
        sum+=numbers[i];
        i++;
    }
    console.log("sum of arrays:", sum);
}
sumOfArrayNumbers(numbers);

// Q Give an aray, find only odd numbers by using while loop .

let nums=[1,3,2,5,6,4,8,7];
function findOddNumbers(nums){
    var i=0;
    while(i<=nums.length-1){
        // console.log(nums[i])

        if(nums[i]%2===1){
            console.log(nums[i]);
        }
        i++;
    }
}
findOddNumbers(nums);

// Q Give an aray, find count of even numbers by using while loop .

let num = [1, 3, 2, 5, 6, 4, 8, 7];
function EvenCount(num) {
    var i = 0;
    count = 0;
    while (i <= num.length - 1) {
        // console.log(num[i])
        if (num[i] % 2 == 0) {
            // console.log(num[i]);
            count++;
        }
        i++;
    }
    console.log("count of even numbers:" ,count);
}
EvenCount(num);


// var number = 3;
// function sumOfNumbers(number) {
//     let count = 1;
//     let sum = 0;
//     while (count <= number) {
//         sum += count;
//         count++;
//     }
//     console.log(sum);
// }
// sumOfNumbers(number);


// var num=6;
// function printAllnum(num){
//     let i=1;
//     while(i<=num){
//         console.log(i);
//         i++;
//     }
// }
// printAllnum(num);