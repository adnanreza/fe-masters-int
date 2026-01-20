// Create a function that takes a string and 
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


// Without using .flat(), create a function to flatten an array

function flatten(arr) {
    return arr.reduce( (acc, item)=> {
        if(Array.isArray(item)) {
            acc = acc.concat(flatten(item));
        } else {
            acc.push(item);
        }
        console.log(acc);
        return acc
    }, [] )
}

const exampleArray = [1, 2, [3, 4, [5,6,7], 8], 9, 10]
console.log('Before flattening: ' + exampleArray);
console.log('After flattening: ' + flatten(exampleArray));