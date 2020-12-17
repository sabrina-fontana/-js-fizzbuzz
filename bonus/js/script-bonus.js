var lista = document.getElementsByTagName('ul')[0];
var n = 1;
 while (n <= 100) {
   if (n % 3 === 0 && n % 5 !== 0) {
     lista.innerHTML += '<li>Fizz</li>';
   } else if (n % 3 !== 0 && n % 5 === 0) {
     lista.innerHTML += '<li>Buzz</li>';
   } else if (n % 3 === 0 && n % 5 === 0) {
     lista.innerHTML += '<li class="fizzbuzz">FizzBuzz</li>';
   } else {
     lista.innerHTML += '<li>' + n + '</li>';
   }
   n++;
 }

// // OPPURE CON for
// for (n = 1; n <= 100; n++) {
//   if (n % 3 === 0 && n % 5 !== 0) {
//     lista.innerHTML += '<li>Fizz</li>';
//   } else if (n % 3 !== 0 && n % 5 === 0) {
//     lista.innerHTML += '<li>Buzz</li>';
//   } else if (n % 3 === 0 && n % 5 === 0) {
//     lista.innerHTML += '<li class="fizzbuzz">FizzBuzz</li>';
//   } else {
//     lista.innerHTML += '<li>' + n + '</li>';
//   }
// }
