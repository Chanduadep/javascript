
let tempChange=[1,9,-3,12,4,-6,-4];
let n=7

const findMaxTemp=(n,tempChange)=>{
    let currTemperature=0;
    let maximumTemp=0;
    for(i=0;i<n;i++){
        currTemperature=currTemperature+tempChange[i];
        if(currTemperature>maximumTemp){
            maximumTemp=currTemperature;
        }
    }
    return maximumTemp;
}
console.log(findMaxTemp(n,tempChange));

