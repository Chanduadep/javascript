function isPalindrome(string) {
    if(string.length === 1 ){
        return "Not a palindrome."
    }
    for (var i = 0; i <= Math.floor((string.length - 1) / 2); i++) {
    //   console.log(string[i] , i, string[string.length - 1 - i], string.length -1 - i);
        if(string[i] !== string[string.length - 1 - i]){
            // console.log("String is not palindrome")
            return 'String is not palindrome';
        }
        // i++
    }
    // console.log("String is palindrome.")
    return "String is palindrome";
  }
  console.log(isPalindrome("a"))
const output = isPalindrome("roataor");
console.log(output,"output");

console.log( 2 == 2)
  console.log( 2 != 2)
  console.log( 2 === 2) // check data and datatype
  console.log( 2 !== 2)

var numbers = [10, "Hello", 30, 40, 50, 60, 70, 80, "Hi"];
console.log(numbers)
console.log(numbers.length) // its calculates from 1..
console.log(numbers[0])
console.log(numbers[4])
console.log(numbers[numbers.length - 1])
function printArrayNumbers(numbers){
    for(var i = 0 ; i <= numbers.length - 1  ; i++){
        console.log(i, numbers[i] )
    }

}
printArrayNumbers(numbers)

var arrayOfNumbers = [1, 2, 3,4,5,6,7,8,9];
// Print addition of numbers who are odd  
function SumOfOddNumbersFromArray(array) {
    var addition = 0;
    for(var i = 0 ; i <= array.length - 1 ; i++){
        // console.log(array[i])
        if(array[i] % 2 == 1){
            addition = addition + array[i]; 
        }
    }
    console.log(addition)
}
SumOfOddNumbersFromArray(arrayOfNumbers)