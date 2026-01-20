//Warmum for onsite
let test = "race";

function reverseString(str) {
    //Split the string by character and get an array of those characters
    //Reverse the array
    //Join the array back char by char to get a reversed version of og str
    return str.split("").reverse().join("");
    //alternate version
    //return Array.from(str).reverse().join("");
}

function reverseString2(str){
    let result = "";
    for(let i=str.length-1; i>=0; i--){
        result += str.charAt(i);
    }
    return result;
}

console.log("Original String: "+test);
console.log("Reversed String: "+reverseString(test));
console.log("Reversed String: "+reverseString2(test));