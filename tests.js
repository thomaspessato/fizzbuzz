//instantiating fizzbuzz
var fizzBuzz = new FizzBuzz();

// TESTING
QUnit.test("FizzBuzz Number Test", function( assert ) {
    assert.equal(fizzBuzz.getFizzBuzzNumber(1), 1, "Number 1 is not Fizz or Buzz");
    assert.equal(fizzBuzz.getFizzBuzzNumber(3), "Fizz", "Number 3 is Fizz (divisible by 3)");
    assert.equal(fizzBuzz.getFizzBuzzNumber(5), "Buzz", "Number 5 is Buzz (divisible by 5)");
    assert.equal(fizzBuzz.getFizzBuzzNumber(7), 7, "Number 7 is not Fizz or Buzz");
    assert.equal(fizzBuzz.getFizzBuzzNumber(12), "Fizz", "Number 12 is Fizz (divisible by 3)");
    assert.equal(fizzBuzz.getFizzBuzzNumber(15), "FizzBuzz", "Number 15 is FizzBuzz (divisible by 3 and 5)");
    assert.equal(fizzBuzz.getFizzBuzzNumber(17), 17, "Number 17 is not Fizz or Buzz");
    assert.equal(fizzBuzz.getFizzBuzzNumber(31), 31, "Number 31 is not Fizz or Buzz");
    assert.equal(fizzBuzz.getFizzBuzzNumber(35), "Buzz", "Number 35 is Buzz (divisible by 5)");
    assert.equal(fizzBuzz.getFizzBuzzNumber(100), "Buzz", "Number 100 is Buzz (divisible by 5)");
});

QUnit.test("FizzBuzz Sequence Test", function( assert ) {
    assert.equal(fizzBuzz.getFizzBuzzSequence(100).length, 100, "Made all FizzBuzz operations correctly with 100 items");
    assert.equal(fizzBuzz.getFizzBuzzSequence(300).length, 300, "Made all FizzBuzz operations correctly with 300 items");
});
