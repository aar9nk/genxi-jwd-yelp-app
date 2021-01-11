# Yelp App: Trying out async Javascript

## Description

Create an app that uses [yelp's api](https://www.yelp.com/fusion) to grab the restaurants in the city of your choice.

> #### Tools
>
> - [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
> - [Bootstrap](https://getbootstrap.com/)
> - [Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## Walkthrough

### Step 1: Get the API

1. Head over to [yelp's documentation](https://www.yelp.com/fusion) and sign up to use their free API.
2. Find the [API key](https://www.yelp.com/developers/v3/manage_app) page and generate a key to use. Paste it as a variable in your code as we will need it later.
3. Read through the [documentation](https://www.yelp.com/developers/documentation/v3) about using the restaurant data, and practice an API call in Postman.

```javascript
`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&sort_by=rating&open_now=true`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
```

Replace the `=${location}` and `${API key}` with the city you want and your API key. Yelp is a bit harder than the openweather api because we need a _header_ along with the api call. But the code is here ready to use!

> Remove the curly brackets

### Step 2: Create the HTML and CSS

1. Create a page using a text input, a submit button, and a space for the data to be displayed.
2. Create a template card that will be used to display the data

#### Test Your Code!

Now is a good chance to test your page, open your `index.html` on your favourite browser or run `open index.html` from your terminal inside the yelp-app folder. You may need to _hardcode_ some expected data from the API.

### Step 3: Implement the Javascript structure

1. Target all the required elements using `document.querySelector()`
2. Add an eventListener with the argument of `click` to the submit button
3. Assign a variable that stores the value of the input field once the button has been clicked
   > Make use of `console.log()` in these steps!
4. Outside of the event listener, create a new function `const createCardHtml = (text) =>` It will take in the parameters of the API data, but for now just pass the user submitted input as an argument.
5. In `createCardHtml` return the template card that was created in the html. Pass in the input value as one of the parts of your card to make sure it works!
   > You will need to return the string using template literals and the `return` keyword if you have not used the one line function style.
6. In the event listener call the function passing in the input value. `const cardHtml = createCardHtml(input.value);`
7. As the last line of the event listener, render the template card. `list.innerHTML = cardHtml;`

### Step 4: Use the API's response

Read through the [using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) guide on mdn, or the [async await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) if you would prefer the newer methods.

1. Create a new function that fetches the restaurant info from the API. Use either fetch or async await.
2. Using template literals for the API url, insert the query parameters you have

```javascript
fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&sort_by=rating&open_now=true`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },)
```

3. Format the response into a usable format with `.then(response => response.json());`
4. `console.log()` the `json` formatted response and make a note of what data you want to use. For example, the names will be under `data.businesses[0].name` It is important to find the correct data as not all API's will respond with the same format.
5. Instead of just populating one card with data, lets try and dynamically create cards depending on how many items we receive. You can use a `for loop` to iterate through the `businesses` or use [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). You might need another variable to add each of the card's to. Which will then be used to render the page.
6. Call the function in the event listener, passing in the input from the text field.
7. Instead of using `console.log()` for the data, pass the required information into the `createCardHtml` function that was made earlier.
8. You may need to change the arguments for this function, and it should now look something like this: `const cardHtml = createCardHtml(name, rating, image, url);`
9. Fill in the template literals in the `createCardHtml` function so that the card is populated with the data from the API.

### Step 5: Optional extras

1. It is important to keep up with the latest versions of the technology you use. Refactor the code to use Async Await
2. Implement error handling with the API response
3. Try using a geoLocation button that checks for the user's current location.
4. Recreate the project using other technologies: [Example](https://github.com/aar9nk/weather-app-react)

## Example

Stuck? Check out the provided example in the [example/](example/) folder!
