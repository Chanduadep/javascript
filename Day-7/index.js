function sumofAllNumbers(starting,ending){
    var count=0;
    for(var i=starting;i<=ending;i++){
        count=count+i
    }
    console.log("count",count)
}
sumofAllNumbers(20,40);

function findFactorial(number){
    var count=1;
    for(var i=2;i<=number;i++){
        count=count*i;
    }
    console.log(`factorial of ${number} is:`,count);
}
findFactorial(6);

function isPalindrome(string){
    for (var i = 0; i <= Math.floor((string.length - 1) / 2); i++) {
        console.log(string[i]);
      }
    }
    
    isPalindrome("roataor");


var name = "chandana";
console.log(name.length ); 
console.log(name.length +1);

console.log(name[4]) 
console.log(name[name.length - 1]);
console.log(Math.floor(name.length / 2));

