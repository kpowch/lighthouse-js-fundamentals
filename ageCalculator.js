function ageCalculator(name, yearOfBirth, currentYear) {
  var age = currentYear - yearOfBirth;
  // note: instead of concatenting the string and variables, can use
  // backticks and variables in ${} brackets!
  var message = `${name} is ${age} years old.`;
  //var message = name + " is " + age + " years old.";
  return message;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
