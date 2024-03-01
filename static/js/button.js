'use strict'; 

console.log('in button.js')

const form = document.querySelector('#form');

function showEatery(event) {
   event.preventDefault();
   console.log('in showEatery function')

   // Get the selected value when the form is submitted
   const eatery = document.querySelector('#eatery-preference').value

   const queryString = new URLSearchParams({ eatery: eatery }).toString();

   const url = `/handle-choose-one?${queryString}`;
   
   fetch(url, {
      method: 'POST',
      body: JSON.stringify({ eatery: eatery }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((serverData) => {
         console.log('in fetch request about to put something on the DOM in the designated div')
         document.querySelector('#eatery-result-container').innerText = serverData['eatery'];
      })
      .catch((error) => {
         console.error('Error:', error);
      });
}

form.addEventListener('submit', showEatery);
// END save my account user info