# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Instructions`

API 
https://pokeapi.co/api/v2/pokemon/{searchValue}

1 - Create React Context to manage API calls and states

2 - Create a reusable search component with the following props
    onChange -> returns the input value

3 - Compose the final UI using the previously created search component

    - UseFetch to create API calls

    - Use search input value to query API

    - Loop over the abilities array and create comma separated string using {ability.name}


Extra:

    handle loading and empty states
