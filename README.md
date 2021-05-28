# RESTy McRestface

## Links

[Deployed Site](https://elegant-wiles-af3667.netlify.app/)

[GitHub Repo](https://github.com/daneng1/RESTy)

## Problem Domain

In this first phase, our goal is to setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner.

In this final phase of the RESTy build, we will be adding some more fidelity to the application, including a menu with a more detailed view of our history, as well as an about us page.

## User Stories

> Users

- As a user, I expect an easy to read and understand user interface so that I can use the application intuitively
- As a user, I want to enter the URL to a REST API and select the REST method to use to access it
- As a user, I want visual confirmation that my entries and selections are valid so that I have confidence the application will be able to fetch the API data that I’ve requested
- As a user, I want to be able to use all REST methods so that I can do more than just get data
- As a user, I want a simple list of all previous queries I’ve run so that I can easily see which queries I’ve run before
- As a user, I want to click on an old query and have my selections appear in the form for me, so I don’t have to re-type them
- As a user, I want to see a “loading” indicator while RESTy is fetching data so that I know it’s working on my request
- As a user, I want to see all of my previous queries as a separate page so that I can browse them in greater detail
- As a user, I would like to view a separate “Help” page so I can learn how the application works

> Developers

- Create a visually appealing site with a Header, Footer, and a large content area
- Create a form that asks for a URL
- Create buttons that let the user choose from the REST methods (get, post, put, delete)
- When the form is filled out, and the button is clicked, display the URL and the method chosen

### Technical Requirements

- `index.js` - Entry Point
- `app.js` - Container
  - Holds state: Count and Results Array
  - A class method that can update state
  - Renders 2 Child Components
- `<Form />`
  - Expects a function to be sent to it as a prop
  - Renders a URL entry form
  - A selection of REST methods to choose from (“get” should be the default)
  - On submit
    - Send the API results back to the `<App>` using the method sent down in props
- `<Results />`
  - Expects the count, headers, results to be sent in as props
  - Renders the count
  - Renders the Result Headers as “pretty” JSON
  - Renders the Result Body as “pretty” JSON

- Add support for PUT, POST, and DELETE in your remote calls
  - Whenever a query is successful (results come back), store the query parameters in local storage
  - Store the URL, Method, and the Body (if any)
  - Store only unique, successful queries
- `<HomePage />`
  - Add a simple history list to the left side of the application
  - List all previous queries, showing the method and the URL
  - When a user clicks a previous query, populate the RESTy forms with the query information
  - Completely hide the output area (Headers & Results) when there are none to display
  - Display any fetch/load errors in place of the results area, if they occur
  - Add a “Loading” indicator while fetching
    - When the user clicks the “Go!” button, show a loading icon on the page
    - When the fetching of results is complete, remove the loading icon and show the results
    Add a menu bar to the header
  - Link labeled “Home” that links to ‘/’ and shows the search form/results page
  - Link labeled “History” that links to ‘/history’ and loads the history page
  - Link labeled “Help” that links to ‘/help’ and loads the about us page
  - Add a simple history list to the left side of the application
    - List all previous queries, showing the method and the URL
    - When a user clicks a previous query, populate the RESTy forms with the query information


### UML

![UML](resty.png)
