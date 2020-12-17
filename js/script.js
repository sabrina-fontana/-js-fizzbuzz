for (var i = 1; i <= 100; i++) {
  // se i è divisibile per 3 ma non per 5
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log('Fizz');
    // se i è divisibile per 5 ma non per 3
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log('Buzz');
    // se i è divisibile sia per 3 sia per 5
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else {
    console.log(i);
  }
}
