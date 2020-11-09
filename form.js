const form = document.forms[0];

form.addEventListener("submit", e => {
    e.preventDefault();
    new FormData(form);
});

document.addEventListener("formdata", event => {
    const body = Object.fromEntries(event.formData.entries());
    const jsonBody = JSON.stringify(body);
    const request = new XMLHttpRequest();

    request.open("POST", "https://jsonplaceholder.typicode.com/users/");
    request.send(jsonBody);
    //get response
    request.onload = function() {
        const jsonResponse = JSON.parse(this.response);
        //dangerous way to save the response used for simple demonstration only
        document.body.innerHTML += `Response from the server: ${jsonResponse.status}`;
    };
});