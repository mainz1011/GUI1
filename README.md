# Table of Contents

This documentation consists of:

- Webpage instruction

- Project structure

- Evaluation report of user tests

- Author's Information

Please note: Annotations are added before some lines of code for the author's own reference as a way of learning to do the project. 

# Webpage instruction

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes.

## Project structure

The structure and main components of this ReactJS project:

- assets folder: it contains assets of this project. Here only images are stored. 
we can store our global styles. We are centralizing the project so we can store the page-based or component-based styles over here. But we can even keep style according to the pages folder or component folder also. But that depends on developer comfortability.

- components folder: Components are the building blocks of any react project. This folder consists of a collection of presentational/stateless components which are the components who have an indirect access/subscription to the state of the app. In this folder, they are UI components like buttons, menus, inputs, etc., that can be used across various files in the project. 

- containers folder: This folder consists of a collection of containers/stateful components which are the components that have a direct subscription to the state of the app, likely a store. They have access to the values in the state and can trigger changes to the state.

## Evaluation report of user tests

The test was conducted by manual testing and running Jest to test Navbar.jsx. 

- Evaluation report of Jest for testing Navbar.jsx: failed, error: "Jest encountered an unexpected token". 

- Evaluation report of manual testing: The webpage is responsive but the few items at the bottom of the togglemenu would be covered by the button "Try Demo" on the right side of the email entry blank when the max-width gets smaller than 550px.
