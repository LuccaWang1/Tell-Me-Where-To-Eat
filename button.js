'use strict'; 

const tellMeButton = document.querySelector('#Tell-Me-Button');

function handleClick(event) {
   event.preventDefault();
   
   fetch('/', {
      method: 'POST',
      body: JSON.stringify(object),
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

tellMeButton.addEventListener('click', handleClick);
// END save my account user info
