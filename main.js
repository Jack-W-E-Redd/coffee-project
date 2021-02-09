"use strict"

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var coffeeList = document.querySelector('#coffees');
var searchBtn = document.querySelector('#search-btn');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSelection = document.querySelector('#coffee-input');
var search = document.querySelector('#search')

function renderCoffee(coffee) {
    return `<h3 class="">${coffee.name}</h3> 
            <p>${coffee.roast}</p>`
}

function renderCoffees(coffees) {
    const coffeesHtml = coffees.reduce((stringBuilder, coffee) => {
        return stringBuilder.concat(renderCoffee(coffee))
    }, '')
    return coffeesHtml;
}

function updateCoffees(e) {
    e.preventDefault();
    var selectedRoast = roastSelection.value;
    var filteredCoffees;
    if (selectedRoast === 'All') {
        filteredCoffees = coffees;
    }else {
        filteredCoffees = filterByRoast(selectedRoast.toLowerCase())
    }
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

function filterByName(value) {
    return coffees.filter(coffee => coffee.name.toLowerCase().search(value) > -1)
}

function filterByRoast(value) {
    return coffees.filter(coffee => {
        const coffeeRoast = coffee.roast.toLowerCase();
        const selectedRoast = value.toLowerCase();
        const coffeeResult = coffeeRoast.search(selectedRoast)
        return coffeeResult > -1
    })
}

function searchQuery(e) {
    const searchString = e.target.value;
    coffeeList.innerHTML = renderCoffees(filterByName(searchString))
}

console.log(coffeeList);
coffeeList.innerHTML = renderCoffees(coffees)
searchBtn.addEventListener('click', updateCoffees);

search.addEventListener('keyup', searchQuery);

function searchRoast(e) {
    const searchRoastString = e.target.value;
    coffeeList.innerHTML = renderCoffees(filterByRoast(searchRoastString))
}

const dropDown = document.getElementById('roast-selection');
dropDown.addEventListener('change', searchRoast)
