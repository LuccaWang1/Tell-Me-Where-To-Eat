'use strict'; 
// use strict on all js files 

// making sure we're in the file in the console, helps w/ any debugging as coding
console.log('in button.js')

// create a variable with the form id to just use the variable instead of increasing runtime with repetitive document querySelectors 
const form = document.querySelector('#form');

// using javascript, because i'm using js to place the result of the python logic in the div box for the user - instead of just going from html to python server - we need to see the result, so js handles taking the data from server and placing it on the dom - same not as on homepage.html on line 68

// showEatery function triggers to run by the event listener below: 
function showEatery(event) {
   event.preventDefault();
   console.log('in showEatery function')

   // Get the selected value when the form is submitted wether that's a type of food or none/no type selected
   const eatery = document.querySelector('#eatery-preference').value

   // create a queryString that is then attached to the url (uses the view function on the python server logic)
   const queryString = new URLSearchParams({ eatery: eatery }).toString();

   const url = `/handle-choose-one?${queryString}`;
   
   // the fetch request that talks between this frontend and the backend python server - then when the data is received with the second .then below, the data from the server is placed as the value within the div that's eatery-result-container, which is the div on line 59 in the homepage.html template file
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

// event listener attacted to the homepage.html form's submit button, triggers the "showEatery" function to run
form.addEventListener('submit', showEatery);