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

// Implement debounce - imagine typing letter by leter into
// a search box, and you don't want each keypress to trigger an API call
// deboundedFn();
// deboundedFn();
// deboundedFn();

function debounce(fn, time){
    let setTimeoutID;

    return function(){
         if(setTimeoutID) clearTimeout(setTimeoutID);

        setTimeoutID = setTimeout(()=>{
            fn.apply(this, arguments);
            setTimeoutID = null;
        }, time);
    }
}

function throttle(fn, time){
    let setTimeoutID;

    return function(){
         if(setTimeoutID) return;

        setTimeoutID = setTimeout(()=>{
            fn.apply(this, arguments);
            setTimeoutID = null;
        }, time);
    }
} 

//test debounce
// Mock API call
function mockApiCall(value) {
  console.log('API call with:', value);
}

const debouncedSearch = debounce(mockApiCall, 1000);
const throttledSearch = throttle(mockApiCall, 1000);

const inputD = document.getElementById('searchInputD');
const inputT = document.getElementById('searchInputT');

inputD.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});
inputT.addEventListener('input', (e) => {
  throttledSearch(e.target.value);
});