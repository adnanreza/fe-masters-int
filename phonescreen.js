/*
  Hi there! Thanks for taking on this code test. The requirements are listed below:
  
  1. Create a "Foods" class or constructor that will take two arguements: a root element and a data object (foodData).
  2. Render all of the items in the data object into the DOM with the root element as the parent
  3. If the user clicks a food item, it should be removed from the list
  
  Rules:
  - Only vanilla JS
  - Feel free to use Google, Bing, DuckDuckGo to look things up
  - Time limit: 30 minutes
*/


/* DO NOT MODIFY */
const rootElement = document.querySelector('.foods');

const foodData = [
  {
    id: 1,
    image: '🌮',
    name: 'taco'
  },
  {
    id: 2,
    image: '🍔',
    name: 'burger'
  },
  {
    id: 3,
    image: '🍆',
    name: 'eggplant'
  },
  {
    id: 4,
    image: '🍎',
    name: 'apple'
  },
  {
    id: 5,
    image: '🥞',
    name: 'pancakes'
  },
];
/* DO NOT MODIFY */


/** YOUR CODE BELOW **/

class Foods{
    constructor(root, data){
        this.rootElem = root;
        this.dataArray = data;
    }
    renderItems() {
        this.rootElem.addEventListener('click', (e)=>{
            e.target.remove();
        })
        let result = "";
        this.dataArray.map(foodItem => {
            let htmlElem = '<div>' + foodItem.image + '-' + foodItem.name + '</div>'
            result += htmlElem;
        });
        this.rootElem.innerHTML = result;
        //alternate way
        this.dataArray.map(foodItem => {
            const div = document.createElement('div');
            div.innerText = foodItem.image + ' ' + foodItem.name;
            this.rootElem.appendChild(div);
        })
    }
}
let food = new Foods(rootElement, foodData);
food.renderItems();