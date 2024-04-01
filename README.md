<a name="top"></a>

# Tell Me Where To Eat

![Image of homepage: This is the homepage of the web app.](/static/images/readme_markdown/home.png)
*This is the homepage of the web app*

## Project Description 
Tell Me Where To Eat provides a solution to psychological analysis paralysis and simplifying dinner decision making. 

The web app allows someone to select a type of food they are craving for their meal, or the user can leave that selection blank (not selecting a type of food), and the app will select an eatery (just one) for the person for their next meal from datasets of eateries. 

The full stack project was built and architected solely by Lucca Wang, who created the app from scratch, developing with Python, Flask, and JavaScript.

<br>

## Snapshot

* Full stack web app built from scratch, providing a solution to psychological analysis paralysis, simplifying decision making.
* Created dynamic content generation with Python's random module and logic. 
* Increased my knowledge of website accessibility by implementing skip navigation, ARIA, and exceeding ADA requirements.
* Utilized Flask's template rendering, JavaScript's event listening actions, and CSS.

<br>

![Image of homepage: Users can select a type of food from the dropdown menu.](/static/images/readme_markdown/dropdown.png)
*Users can select a type of food from the dropdown menu*

### Technologies  
* Python (server, backend logic)
* Flask (Python framework)
* JavaScript (frontend)
* Python's random module (in server used in backend logic) 
* Datasets of real eateries (py file, imported into server for backend logic)
* CSS (frontend, styling)
* HTML (homepage template, rendered by Flask)

<br>

![Image of Homepage: When the user hovers over the button, there is a visual clue that occurs with CSS.](/static/images/readme_markdown/button_hover.png)
*When the user hovers over the button, there is a visual clue that occurs with CSS - the button turns the darker blue color and the usual colors are inverted*

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

![Image of homepage: After selecting a type and clicking the button, a single eatery is placed in the div placeholder.](/static/images/readme_markdown/result.png)
*After selecting a type of food - or not - and clicking the button, a single eatery is placed in the `div` container*

<br>

### Author  
Lucca Wang is an American software engineer.


[Back to Top](#top)