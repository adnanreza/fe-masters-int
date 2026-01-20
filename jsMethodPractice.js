//Create a function that takes a string and 
// returns a new str with duplicates removed

function removeDuplicates(str){
    const arrayVersion = str.split(' ');
    const set = new Set(arrayVersion); // removes duplicates
    const resultArray = [...set]; //convert back to array
    const result = resultArray.join(' '); //convert back to string;
    return result;
}

const str = 'This is is a test test string';
console.log(str);
console.log(removeDuplicates(str));
