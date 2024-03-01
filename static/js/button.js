'use strict'; 

console.log('in button.js')

const tellMeButton = document.querySelector('#form');

const eatery = document.querySelector('#eatery-preference').value

function showEatery(event) {
   event.preventDefault();
   console.log('in showEatery function')

   const queryString = new URLSearchParams({ eatery: eatery }).toString();

   const url = `/handle-choose-one?${queryString}`;
   
   fetch(url, {
      method: 'POST',
      body: JSON.stringify(eatery),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((serverData) => {
         console.log('in fetch request about to put something on the DOM in the designated div')
         document.querySelector('#eatery-result-container').innerText = serverData['eatery'];
      })
}

tellMeButton.addEventListener('submit', showEatery);
// END save my account user info