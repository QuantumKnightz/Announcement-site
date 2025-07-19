//  username and password
let dunklyUser = 'dunkly123';
let dunklyPass = 'dunklypass';

// Function to handle teacher login
function teacherLogin(loginForm) {
    // Get the username and password entered by the user
    let username = loginForm.username.value;
    let password = loginForm.password.value;

    // Check if the entered info match the correct ones
    if (username === dunklyUser && password === dunklyPass) {
        /* If credentials are correct, show a success message 
         and also open the teacher's homepage */
        alert("Login successful!");
        window.open("Teacher-homepage.html");
    } else {
        // If username or password is incorrect, display an error message on the page
        document.getElementById("loginError").innerHTML = 
            "Incorect username or password. PLease Try again.🙂";
            
        // this code opens a new tab for login page for the user to try again. 
        // Otherwise it will redirect to a error page. this i not ideal butt i did not have enough time to fix this bug
        alert("Invalid username or password. Try again.");
        window.open("loginPage.html")
    }
}

