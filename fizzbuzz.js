// FIZZBUZZ CLASS

var FizzBuzz = function() {

    //VARIABLES
    var fizzValue = 3,
        buzzValue = 5;


    // METHODS
    this.getFizzBuzzNumber = function (number) {
        
        if(number % fizzValue == 0 && number % buzzValue == 0) {
            console.log("Number "+number+" is FizzBuzz!");
            return "FizzBuzz";
        }

        if(number % fizzValue == 0) {
            console.log("Number "+number+" is Fizz!");
            return "Fizz";
        }

        if(number % buzzValue == 0) {
            console.log("Number "+number+" is Buzz!");
            return "Buzz";
        }

        return number;
    };

    this.getFizzBuzzSequence = function(quantity) {

        var result = [];

        for (var i = 1; i <= quantity; i++) {
            result.push(this.getFizzBuzzNumber(i));
        }

        return result;

    };

};