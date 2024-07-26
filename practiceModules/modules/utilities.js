/*
This is a premade project from codeacademy. 
The Following steps were taken to enrich my knowledge of js modules:
Congrats! You’ve helped WorkAround build their WorkAround Explorer application using a modular approach. 
The end result is a well-organized program with clear boundaries for each of its separate concerns.

Often, programmers will create a set of generic “utility” functions that can be applied to any program, 
regardless of the context. In this case, it would be useful to have a function that can properly format a number, like so:

const result = formatNumber(1234567.89);
// result = "1,234,567.89"

As an extra challenge:

Create a new file in the modules/ directory called utilities.js.
Define and export a function in utilities.js called formatNumber().
 This function should have a number parameter and should return a string representation of 
 that number value with a comma (,) character between every 3rd digit.
Import this function into main.js and use it to format the four data values rendered to the screen.
*/

const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatNumbers = (...numbers) => {
    return numbers.map(formatNumber);
  };