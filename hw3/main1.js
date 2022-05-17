function compare(arr1,arr2) {
    if(arr1>arr2){
        console.log("first arr is greater")
    }else if (arr1 < arr2){
        console.log('second arr is greater')
    }else {
        console.log('equal')
    }

}
compare(20, 30 )

function ulala(arr1,arr2) {
    console.log(arr1, arr2)

}
const arr1 = [5,10,20]
const arr2 = [67,45,32,10]
ulala(arr1,arr2)
//////////////////////////////////////////////////////////////////////////////////////

function Fizzbuzz (number) {
    for (var i = 0; i < number; i++);{
        if (i % 3 === 0 && i % 5 === 0){
            console.log ("FizzBuzz");
        }
        else if (i % 3 === 0 ){
            console.log ("Fizz");
        }
        else if (i % 5 === 0 ){
            console.log ("Buzz");
        }
        else {
            console.log("value of i is " + i);
        }
    }
}
var number = 100;
var number1 = 55;
Fizzbuzz (number);



