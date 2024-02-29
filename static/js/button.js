'use strict'; 

console.log('in button.js')

const tellMeButton = document.querySelector('#submit-form');

const eatery = document.querySelector('#eatery-preference').value

const url = `/weather.json?eatery=${eatery}`;

function showEatery(event) {
   event.preventDefault();
   console.log('in showEatery function')
   
   fetch(url)
      .then((response) => response.json())
      .then((serverData) => {
         console.log('in fetch request about to put something on the DOM in the designated div')
         document.querySelector('#eatery-result-container').innerText = serverData['eatery'];
      })
}

tellMeButton.addEventListener('submit', showEatery);
// END save my account user info