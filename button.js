'use strict'; 

const tellMeButton = document.querySelector('#tell-me-button');

const eateryPreference = document.querySelector('#eatery-preference')

function handleSubmit(event) {
   event.preventDefault();
   
   fetch('/handle-choose-one', {
      method: 'POST',
      body: JSON.stringify(tellMeButtonValue),
      headers: {
         'Content-Type': 'application/json',
      },
   })
      .then((response) => {
         console.log('in the response .then')
         return response.json()
      })
      .then((responseJson) => {
         console.log('in the responseJson .then doing the fetch AJAX response');
         console.log(responseJson);
      })
}

tellMeButton.addEventListener('submit', handleSubmit);
// END save my account user info
