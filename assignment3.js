

//1

function kilometerToMeter(kilometer){
    var meter= kilometer*1000;
    return meter;
}
var result=kilometerToMeter(2);
console.log(result);

//2

function budgetCalculator(budget){
    watch=[0];
    phone=[1];
    laptop=[2];


    budget=watch+phone+laptop;
    return budget;
}

var result= budget[2,3,4];
console.log(result);

//3

function hotelCost(days){
    var cost=0;
    if(days <= 10 ){
        cost= days * 100;
    }
    else if(days<=20){
        var firstPart= 10*100;
        var remaining = days -10;
        var secondPart = remaining*80;
        cost = firstPart + secondPart;

    }
    else{
        var firstPart = 10*100;
        var secondPart = 10*80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;

    }
    return cost;
}
var cost=hotelCost(35);
console.log(cost);


//4

function megaFriend(friends()){
    var max= friends[0];
    for(var i=0; i<friends.length; i++){
        var element= friends[i];
        if(element > max){
            max= element;
        }
    }
    return max;
}
var result=megaFriend[pranta,dipta,babul];
console.log(result);
