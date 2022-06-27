'use strict'

const searchInput = document.getElementById('search-input');
const btn = document.getElementById('search-btn');
const cardsContainer = document.querySelector('.cards');
const allCards = document.querySelector('.cards-all');
const cardTitle = document.querySelector('.title-card');
const cardImage = document.querySelector('.image-card');
const cardBody = document.querySelector('.body-card');


// searchInput.addEventListener('input', (e) => {
//     let value = e.target.value;
//     console.log(e.target.value)
//     // if (value.length > 0) {
//     //     value = value.toLowerCase()
//     // } else {
//     //     return
//     // }
// })

const getInput = function () {
    let inputVal = searchInput.value;
    return searchFunction(inputVal);
}

const searchFunction = function (input) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    fetch(`${proxy}https://tastedive.com/api/similar?k=438369-Movierec-85JN31SF&q=${input}&type=movies&limit=8`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(`${err} ⛔️`);
            renderError(`Oops! ${err.message}`)
        })
        .finally(() => {
        })
};