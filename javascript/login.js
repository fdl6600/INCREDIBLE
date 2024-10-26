function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
         alert("Please enter both username and password.");
    } else {
        // Redirect to the next page if both fields are filled
        window.location.href = "choice.html";
    }
}

function Login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    validateForm()
}


