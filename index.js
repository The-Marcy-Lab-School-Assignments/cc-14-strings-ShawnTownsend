//Algorithm
// 1. Declare a function named stripUppercase() that takes in parameters.
// 2. Declare a variable for the new string and let it be empty.
// 3. Create a for loop to iterate through the string.
// 4. Check if the character is NOT a capital letter.
// 5. Add the character to end of the newString.
// 6. Return string.


function stripUppercase(string) {
  let newString = '';
  for (i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase())
      newString += string[i];
  }
  return newString;
}
console.log(stripUppercase("Hello!")); //output: "ello!""