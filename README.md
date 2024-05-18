<a name="top"></a>

# Tell Me Where To Eat

![Image of tell me where to eat web app's homepage - opening](/static/images/readme_markdown/Screenshot-1-opening.png)
*This is the homepage - and only page - of the web app. All body main content is in one div to standardize the styling and alignment. I employed components of accessibility, like simplifying the UI for the UX, high contrast, and large font sizes, as well as skip navigation and ARIA for screen readers*

## Project Description 
Tell Me Where To Eat provides a solution to psychological analysis paralysis and simplifying dinner decision making. 

The web app allows someone to select a type of food they are craving for their meal, or the user can leave that selection blank (not selecting a type of food), and the app will select an eatery (just one) for the person for their next meal from datasets of eateries. 

The full stack project was built and architected solely by Lucca Wang, who created the app from scratch, developing with Python, Flask, and JavaScript.

<br>

![Image of tell me where to eat web app's homepage - dropdown menu](/static/images/readme_markdown/Screenshot-2-dropdown.png)
*The user can select from the HTML dropdown or not for a food preference. The selection or no selection (if the user doesn't select one from the dropdown menu) is sent from the HTML form to the Python server view function. I imported the Python's Random module and set up the Python logic to either select from all options if there is no selection or from the options within each food category type if there is a selection from the dropdown menu*

## Snapshot

* Full stack web app built from scratch, providing a solution to psychological analysis paralysis, simplifying decision making.
* Created dynamic content generation with Python's random module and logic. 
* Increased my knowledge of website accessibility by implementing skip navigation, ARIA, and exceeding ADA requirements.
* Utilized Flask's template rendering, JavaScript's event listening actions, and CSS.

<br>

![Image of tell me where to eat web app's homepage - hover and click(active) the button](/static/images/readme_markdown/Screenshot-3-hover-click-button.png)
*There is hover and active CSS on the "Tell Me" button that indicates to the user that the website is receptive to them. The click of the button and the next step/action (placing the result in a below div) are handled by JavaScript.*

### Technologies  
* Python (server, backend logic, Random module's Choice method)
* Canva (used for the image screenshot in this README document)
* CSS (frontend, styling)
* Datasets of real eateries (a dictionary of dictionaries imported to the server)
* Flask (Python framework)
* Google Font API
* HTML (homepage template, rendered by Flask)
* JavaScript (frontend)

<br>

![Image of tell me where to eat web app's homepage - dropdown menu](/static/images/readme_markdown/Screenshot-4-res-in-div.png)
*After the user clicks the "Tell Me" button, the JavaScript event listener is activated and the client sends a request to the server. The Python logic uses the Random module's Choice method to select an eatery. After the server response, the JS places the resulting eatery into the div that has the unique id in the html div element. The styling of font family, size, and color remain consistent with the rest of the page thanks to the standarization I implemented for the HTML template and CSS*

### Accessibility
I built on my knowledge of accessibility and learned so much while making this project. Here's some of what I included: 

* There is a __skip navigation__ feature that's visually hidden but accessible to screen readers. Users who navigate the site using screen readers or keyboard shortcuts can use the link to jump directly to the main content area, improving their browser experience. 
* __ARIA (Accessible Rich Internet Applications)__ attributes help improve accessibility by providing additional context and cues to assistive technologies.
* The colors are of __high contrast__ to each other, so that people can more easily read and intake the information on the screen. It's a dark font color on a light background. It meets ADA requirements for high color contrast. 
* The __font size__ is large (over 19px) to enable high readability. The font size meets ADA requirements and exceeds the recommendations for website font size.
* All the text is of the same font size and style throughout the app for __cohesion, consistency, and readability__. 
* The dropdown menu of items to select is the same font size as the rest of the text on the page for cohesion, consistency, and readability. 
* Everything is left aligned for readability.
* All images have captions.

<br>

### Author  
Hi, my name is Lucca Wang, and I'm a software engineer. Feel free to connect on [LinkedIn](https://www.linkedin.com/in/luccawang/)!

<br>

[Back to Top](#top)