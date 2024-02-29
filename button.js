'use strict'; 

const tellMeButton = document.querySelector('#tell-me-button');

const eateryPreferenceValue = document.querySelector('#eatery-preference').value

function handleSubmit(event) {
   event.preventDefault();
   
   fetch('/handle-choose-one')
      .then((response) => response.json())
      .then((responseJson) => {
         document.querySelector('#eatery-result-container').innerText = responseData;
      })
}

tellMeButton.addEventListener('submit', handleSubmit);
// END save my account user info
