// функция внутри фукнции

//Пример 1

// function createCalc(n) {
//   return function () {
//     console.log(18 * n);
//   };
// }

// const calc = createCalc(12);
// console.log(calc);
// calc();

//Пример 2

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// const add5 = makeAdder(5);
// const add18 = makeAdder(18);
// const add10 = makeAdder(10);

// console.log(add5(11));
// console.log(add18(16));
// console.log(add18(22));
// console.log(add10(100));

// Пример 3

// function createMessage(company) {
//   return function (firstName) {
//     return `Здравствуй ${firstName}, рады приветствовать тебя в ${company} `;
//   };
// }

// const messageForFacebook = createMessage("Facebook");
// const messageForGoogle = createMessage("Google");

// console.log(messageForFacebook("Петро"));
// console.log(messageForGoogle("Олег"));
