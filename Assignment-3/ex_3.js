// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.//
var personName = "AbdulRaheem";
//lowerCase
console.log(personName.toLowerCase());
//upperCase
console.log(personName.toUpperCase());
//titleCase
var firstLetter = personName.charAt(0).toUpperCase();
var restLetter = personName.slice(1).toLowerCase();
var titleCase = firstLetter + restLetter;
console.log(titleCase);
