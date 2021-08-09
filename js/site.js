"use strict";

/* 
// traditional fetch
fetch('https://jsonplaceholder.typicode.com/users')
    // json data promise grabbed here - 'then' function with response as the parameter
    .then(function (response) {
        return response.json();  // get the JSON data from the response using json()
    })
    // append data - to display in the html page
    .then(function (data) {
        appendData(data);
    }) 
    // if an error, catch here
    .catch(function (err) {
        console.log(err );
        alert(err + " " + err.messages);
        
    }) */

// using lambda expressions to fetch users
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => appendData(data))
    // .then((json) => console.log(json))
    .catch((err) => alert(err + " " + err.messages));


// function/loop thru json user 'data' and append it into the div with the id of 'userData'
function appendData(data) {
    // get the div id where data will be placed
    let allUsers = document.getElementById('userData');

    for (let i = 0; i < data.length; i++) {
        // append each user/person to the html page
        // new div element
        let div = document.createElement('div');
        // fill the new div with a user/persons data
        // div.innerHTML = 'User Name: ' + data[i].username + '  Full Name: ' + data[i].name;
        div.innerHTML = `<span class="fw-bold">Full Name: </span>${data[i].name} <br>
                        <span class="fw-bold">Email: </span>${data[i].email} <br>
                        <span class="fw-bold"><a href="app_details.html?${data[i].id}">User Details</a></span><br>
                        <br>`;

        // append div to the allUsers div
        allUsers.appendChild(div);

    }
}