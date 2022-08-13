What it contains ?

1.It contains simple User card grid layout having navbar.

2.The navbar contains a button saying 'Get Users', which makes an API call to get the user data.

3.Uses https://reqres.in/api/users?page=1 to get data.

4.It also shows a loader while the API fetches the data .

My Approach for the project

1.I started of with Basic React BoilerPlate.

2.I started thinking of all the components and libraries i will require for the project

Libraries Used:
1.Material-ui
2.Tailwind
3.Axios

I decided my folder structure something like
App.js > CardLayout.jsx > Navbar.jsx

3.After That i started with component Navbar.jsx by setting of the navbar and Button using material-ui.

4.Then I made a cardlayout.jsx component and made a asynchronous function fetchData() for the api call using Axios.

5.I imported the Navbar.jsx component in the carlayout.jsx and passed down the fetchData() function as a prop which can be accessed on button click Get User in Navbar.jsx.

6.I created a grid layout using material-ui to make the UI of the project.

7.After that with i started adding a spinner to show loading untill data is being fetched using material-ui and useState hook.
