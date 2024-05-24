//finding the factorial

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact = fact * i;
  }

  console.log(fact);
}
console.log(factorial(5));
