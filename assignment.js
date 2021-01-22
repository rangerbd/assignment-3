// 1st-kilometerToMeter
function kilometerToMeter(kiloMeter){
    var meter = kiloMeter * 1000;

    if(meter < 0){
        console.log("undefined");
    }
    else {
        return meter;
    }
}
    var result = kilometerToMeter(-14);
    console.log(result);

// 2nd-budgetCalculator

function budgetCalculator(quantity1, quantity2, quantity3)
 //quantity1 = clock , quantity2 = mobile , quantity3 = laptop

{
    var clock = 50 * quantity1;
    var mobile = 100 * quantity2;
    var laptop = 500 * quantity3;

    var total_price = clock + mobile + laptop;
    return total_price;
}
    var result = budgetCalculator(10, 5, 3);
    console.log(result);


// 3rd-hotelCost

function hotelCost(number){
    if(number<=10){
    var cost = number * 100;
    return cost;
    }
    else if(number>10 && number<=20){
    var cost2 = ((number-10) * 80) + (10 * 100);
    return cost2;
    }
    else{
    var cost3 = ((number - 20) * 50) + (10 * 80) + (10 * 100);
    return cost3;
    }
}   
    var result = hotelCost(25);
    console.log(result);