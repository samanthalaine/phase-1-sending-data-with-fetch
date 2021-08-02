
//makes a POST request to /users with a name and email
let body = document.querySelector("body")

function submitData(userName, userEmail){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers:{ 
            "Content-Type": "application/json",
            Accept: "application/json",

        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
          }),
    })

//handles the POST request response, retrieves the new id value and appends it to the DOM
        .then(function (response){
            return response.json()
        })
        .then(function (object){
            body.append(object.id)
        })

//handles a failed POST request using catch, appends the error message to the DOM        
        .catch(function(error){
            alert("oh no!")
            body.append(error.message)
        })

}