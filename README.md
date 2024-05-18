<a name="top"></a>

# Tell Me Where To Eat

![Image of tell me where to eat web app's homepage - opening](/static/images/readme_markdown/Screenshot-1-opening.png)
_This is the homepage - and only page - of the web app. __All body main content is in one div to standardize the styling and alignment__. I employed components of __accessibility__, like __simplifying the UI for the UX__, __high contrast__, and __large font sizes__, as well as __skip navigation and ARIA for screen readers___

## Project Description 
Tell Me Where To Eat __provides a solution to psychological analysis paralysis and simplifying dinner decision making__. 

The web app allows someone to select a type of food they are craving for their meal, or the user can leave that selection blank (not selecting a type of food), and the app will select an eatery (just one) for the person for their next meal from datasets of eateries. 

The full stack project was built and architected solely by Lucca Wang, who created the app from scratch, developing with __Python, Flask, JavaScript, datasets, a Google Font API__, and more.

<br>

![Image of tell me where to eat web app's homepage - dropdown menu](/static/images/readme_markdown/Screenshot-2-dropdown.png)
_The user can select from the __HTML__ dropdown or not for a food preference. The selection or no selection (if the user doesn't select one from the dropdown menu) is sent from the HTML form to the __Python server view function__. I imported the Python's __Random module__ and set up the Python logic to either select from all options if there is no selection or from the options within each food category type if there is a selection from the dropdown menu_

## Snapshot

* Full stack web app built from scratch, providing a solution to psychological analysis paralysis, simplifying decision making.
* Created dynamic content generation with Python's random module and logic. 
* Increased my knowledge of website accessibility by implementing skip navigation, ARIA, and exceeding ADA requirements.
* Utilized Flask's template rendering, JavaScript's event listening actions, and CSS.

<br>

![Image of tell me where to eat web app's homepage - hover and click(active) the button](/static/images/readme_markdown/Screenshot-3-hover-click-button.png)
_There is __hover and active CSS__ on the "Tell Me" __button__ that indicates to the user that the website is receptive to them. The click of the button and the next step/action (placing the result in a below div) are handled by JavaScript._

### Technologies  
* __Python__ (server, backend logic, Random module's Choice method)
* __Canva__ (used for the image screenshot in this README document)
* __CSS__ (frontend, styling)
* __Datasets__ of real eateries (__a dictionary of dictionaries imported to the server__)
* Flask (__Python framework__)
* __Google Font API__
* __HTML__ (homepage template, rendered by Flask)
* __JavaScript__ (frontend)

<br>

![Image of tell me where to eat web app's homepage - dropdown menu](/static/images/readme_markdown/Screenshot-4-res-in-div.png)
_After the user clicks the "Tell Me" button, the __JavaScript__ event listener is activated and the __client sends a request to the server__. The __Python logic uses the Random module's Choice method__ to select an eatery. __After the server response, the JS places the resulting eatery into the div that has the unique id in the html div element__. The styling of font family, size, and color remain consistent with the rest of the page thanks to the standarization I implemented for the HTML template and CSS_

### Accessibility
I built on my knowledge of accessibility and learned so much while making this project. Here's some of what I included: 

* There is a __skip navigation__ feature that's visually hidden but accessible to screen readers. Users who navigate the site using screen readers or keyboard shortcuts can use the link to jump directly to the main content area, improving their browser experience. 
* __ARIA (Accessible Rich Internet Applications)__ attributes help improve accessibility by providing additional context and cues to assistive technologies.
* The colors are of __high contrast__ to each other, so that people can more easily read and intake the information on the screen. It's a dark font color on a light background. It meets ADA requirements for high color contrast. 
* The __font size__ is large (over 19px) to enable high readability. The font size __meets ADA requirements__ and exceeds the recommendations for website font size.
* All the text is of the same font size and style throughout the app for __cohesion, consistency, and readability__. 
* The dropdown menu of items to select is the same font size as the rest of the text on the page for __cohesion, consistency, and readability__.
* All images in this documentation have captions also for accessibility purposes.

<br>

### Author  
Hi, my name is Lucca Wang, and I'm a software engineer. Feel free to connect on [LinkedIn](https://www.linkedin.com/in/luccawang/)!

<br>

[Back to Top](#top)