// створюю звичайний масив
const numbers = [2, 5, 8, 10] 

// стрілочна функція з використовуванням map для створення нового масиву із числами в квадраті
const squaredNumbers = numbers.map(number => number * number);
// друк нового масиву у консоль
console.log(squaredNumbers);