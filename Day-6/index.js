function QuestionOne(starting,ending){
    for(var i=starting;i<=ending;i++){
        console.log(i);
    }
}
QuestionOne(20,40);

function QuestionTwo(initialize,range){
    for(var i=initialize;i<=range;i+=2){
        console.log(i);
    }
}
QuestionTwo(1,100);

function QuestionThree(start,end){
    for(var i=start;i<=end;i+=10){
        console.log(i);
    }
}
QuestionThree(50,150);

for(var i=40;i>=10;i-=5){
    console.log(i);
}

function reverseloop(start,end,sequence){
    for(var i=start;i>=end;i-=sequence){
        console.log(i);
    }
}
reverseloop(40,20,3);

function reverseodd(start,end){
    for(var i=start;i>=end;i--){
        if(i%2==1){
            console.log(i)
        }
    }
}
reverseodd(40,0);

function evenoddcount(initialize,range){
    var evencount=0;
    var oddcount=0;
    for(i=initialize;i>=range;i--){
        if(i%2==0){
            evencount++;
        }
        else{
            oddcount++;
        }
    }
    console.log(`Even Count : ${(evencount)}`);
    console.log(`Odd Count : ${(oddcount)}`);
}
evenoddcount(60,20);