//Warmum for onsite
let test = "race";

function reverseString(str) {
    //Split the string by character and get an array of those characters
    //Reverse the array
    //Join the array back char by char to get a reversed version of og str
    return str.split("").reverse().join("");
}

console.log("Original String: "+test);
console.log("Reversed String: "+reverseString(test));