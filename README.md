<a name="top"></a>

# Let's Eat

[![Let's Eat app by Lucca Wang](/static/images/readme_markdown/LetsEat-webapp.gif)](#project-description)

## Table of Contents
[Project Description](#project-description)
[Snapshot of Project](#snapshot-of-project) 
[Technologies](#technologies)
[Accessibility](#accessibility)
[Author](#author)

## Project Description 
__Let's Eat__ provides a solution to [psychological analysis paralysis (the pyschology term for when we have too many options that we freeze without being able to choose one)](https://health.clevelandclinic.org/analysis-paralysis). Simply put, __this app helps you decide where to eat quickly, with a click of a button!__

The user selects a type of food, or can chose not to select a type of food. 

The app then selects an eatery from provided datasets of eateries and outputs one eatery as the result, which is placed into a div shown in the viewport. 

This is a full-stack project built and architected by [Lucca Wang](#author). 

Wang built the app from scratch, [developing with __Python, Flask, JavaScript, Google Font API__, and more](#technologies).

<br>

[Back to Top](#top)

## Snapshot of Project

* Built from scratch

* Data flow from the frontend to the backend, back to the frontend (so: user input in html to Python-Flask server, then back to the DOM with JavaScript) 

* Accessibility (skip navigation, ARIA, ADA requirements)

* 1 API integrated so far

<br>

[Back to Top](#top)

### Technologies  
* [__Python__ (server, backend logic, Random module's Choice method)](#snapshot-of-project)
* [__Flask__ (Python framework)](#snapshot-of-project)
* [__JavaScript__ (frontend)](#snapshot-of-project)
* [__Canva__ (used for the image in this README document)](#lets-eat)
* __CSS__ (frontend, styling)
* __Datasets__ of real eateries (__a dictionary of dictionaries imported to the server__)
* [__Google Fonts API__](#lets-eat)
* __HTML__ (homepage template, rendered by Flask)


<br>

[Back to Top](#top)

### Accessibility
* There is a __skip navigation__ feature that's visually hidden but accessible to screen readers. Users who navigate the site using screen readers or keyboard shortcuts can use the link to jump directly to the main content area, improving their browser experience. 

* __ARIA (Accessible Rich Internet Applications)__ attributes help improve accessibility by providing additional context and cues to assistive technologies.

* The colors are of __high contrast__ to each other, so that people can more easily read and intake the information on the screen. It's a dark font color on a light background. It meets ADA requirements for high color contrast. 

* The __font size__ is large (over 19px) to enable high readability. The font size __meets ADA requirements__ and exceeds the recommendations for website font size.

* There is __consistent__ font size and style throughout the app for __cohesion that improves readability__. 

* The dropdown menu of items to select is the same font size as the rest of the text on the page for cohesion, consistency, and readability.

<br>

[Back to Top](#top)

### Author  
Hi, my name is Lucca Wang, and I'm a software engineer. Visit my [website](https://luccawang.dev) I hand built at [https://luccawang.dev](https://luccawang.dev). Feel free to connect on [LinkedIn](https://www.linkedin.com/in/luccawang/)!

<br>

[Back to Top](#top)