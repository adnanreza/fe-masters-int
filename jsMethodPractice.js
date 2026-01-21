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
  console.log('debouncer activated')
  debouncedSearch(e.target.value);
});
inputT.addEventListener('input', (e) => {
  throttledSearch(e.target.value);
});

// Create a function to move an element. The function arguments are,
// distance, duration, and the element to move.

function moveElement(distance, duration, element){
    const start = performance.now();
    
    function move(currentTime){
        const elapsed = currentTime - start;
        const progress = elapsed / duration;
        const amountToMove = progress * distance;

        element.style.transform = `translateX(${amountToMove}px)`;

        if(amountToMove < distance) {
            requestAnimationFrame(move);
        }
    }
    requestAnimationFrame(move);
}

//move the input 100px over 1s
moveElement(100, 1000, inputD);

// We have two identical DOM trees, A and B. For DOM tree A, we have
// the location of an element. Create a function to find that same element
// in tree B.

function reversePath(element, root){
    // Phase 1: Walk up and record the path
    const path = [];
    let pointer = element;

    // Move up till we hit the root
    while(pointer.parent){
        const parent = pointer.parent;
        const index = Array.from(parent.children.indexOf(pointer)); // which child number am i in my parent node
        path.push(index);
        pointer = parent;
    }

    // Phase 2: Walk down in Tree B
    pointer = root; // Start at Tree B's root

    // Replay the path in reverse
    while(path.length){
        pointer = pointer.children[path.pop()];
    }
    return pointer;
}

// Test reversePath()
const rootA = document.getElementById("rootA");
const rootB = document.getElementById("rootB");

const targetA = rootA.querySelector("span");
const result = reversePath(targetA, rootB);

console.log(result.textContent); // "Target B"
console.log(result.tagName);     // "SPAN"
