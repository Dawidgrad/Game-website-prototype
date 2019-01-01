/***********************************
             Accounts
***********************************/

var objAccounts = [
    {
        username: "admin",
        password: "temp"
    },
    {
        username: "joshua",
        password: "mko09ijn"
    }
]

/***********************************
            Login system
***********************************/

function getInfo()
{
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    
    for (i = 0; i < objAccounts.length; i++)
    {
        if (username == objAccounts[i].username)
        {
            if (password == objAccounts[i].password)
            {
                location = 'index.html';
                alert("You have successfully logged in!");
                document.cookie = "loggedIn=true";
                
                userLoggedIn();
                
                return false;
            }
            
            location = 'login.html';
            alert("Invalid password!");
            return false;
        }
    }
    
    location = 'login.html';
    alert("The account could not be found!");
    return false;
}

function userLoggedIn()
{
    document.getElementById("loginButton").style.display = "none";
    document.getElementById("registerButton").style.display = "none";
    document.getElementById("logoutButton").style.display = "initial";
    
    document.getElementById("accountTab").classList.remove("disabled");
}

function userLoggedOut()
{
    document.getElementById("loginButton").style.display = "initial";
    document.getElementById("registerButton").style.display = "initial";
    document.getElementById("logoutButton").style.display = "none";
    document.getElementById("accountTab").classList.add("disabled");
}

function logOut()
{
    document.cookie = "loggedIn=false";
    alert("You have successfully logged out!");
}

function checkIfLoggedIn()
{
    var x = document.cookie;
    if (x.indexOf("true") != -1)
    {
        userLoggedIn();
    }
    else
    {
        userLoggedOut();
    }
}


/***********************************
               Forms
***********************************/

function changeEmail()
{
    var success = changeEmailValidation();
    
    if (success)
    {
        alert("Email changed successfully!");
    }
}

function changePassword()
{
    var success = changePasswordValidation();
    
    if (success)
    {
        alert("Password changed successfully!");
    }
}

function purchasePoints()
{
    alert("You will be redirected to payment site...");
}

function changeNotifications()
{
    var success = changeNotificationsValidation();
    
    if (success)
    {
        alert("Notifications preference changed successfully!");
    }
}

function changeSecretQuestion()
{
    var success = changeSecretQuestionValidation();
    
    if (success)
    {
        alert("Secret question changed successfully!");
    }
}

function addTicket()
{
    alert("Ticket has been added successfully!");
}

function addTicketReply()
{
    
}

function checkTicket()
{
    var email = document.getElementById("email").value
    var ticketNumber = document.getElementById("ticketNumber").value
    
    if (email == "joshua@gmail.com" && ticketNumber == "2584")
    {
        alert("Ticket found! You will be redirected to ticket page!");
        location = 'ticket-status-example.html';
    }
    else
    {
        alert("Ticket has not been found! Check if email and ticket number are correct!");
        location = 'check-ticket.html';
    }
    return false;
}

function register()
{
    var success = registerValidation();
    
    if (success)
    {
        alert("Registration has been successful!");
    }
}


/***********************************
    Dynamic addition of elements
***********************************/
function addFieldTicket()
{
    var container = document.getElementById("ticketForm");

    container.appendChild(document.createTextNode(""));
    var input = document.createElement("input");
    input.type = "file";
    input.style.margin = "3px";
    container.append(input);
    container.append(document.createElement("br"));
}

/***********************************
            Validation
***********************************/
function registerValidation()
{    
    var username = document.forms["registrationForm"]["login"];
    var password = document.forms["registrationForm"]["password"];
    var confirmPassword = document.forms["registrationForm"]["confirmPassword"];
    var email = document.forms["registrationForm"]["email"];
    var secretAnswer = document.forms["registrationForm"]["secretAnswer"];
    
    if (username.value.length < 4 || username.value.length > 16)
    {
        alert("Username has to be 4 to 16 characters long!");
        username.focus();
        return false;
    }
    if (password.value.length < 8 || password.value.length > 16)
    {
        alert("Password has to be 8 to 16 characters long!");
        password.focus();
        return false;
    }
    if (password.value != confirmPassword.value)
    {
        alert("Passwords do not match!");
        password.focus();
        return false;
    }
    if (validateEmail(email.value) == false)
    {
        alert("Invalid email!");
        email.focus();
        return false;
    }
    if (secretAnswer.value.length < 4 || secretAnswer.value.length > 16)
    {
        alert("Secret answer has to be 4 to 16 characters long!");
        secretAnswer.focus();
        return false;
    }
    
    return true;
}

function changeEmailValidation()
{
    var currentEmail = document.forms["changeEmailForm"]["currentEmail"];
    var newEmail = document.forms["changeEmailForm"]["newEmail"];
    var newEmailConfirm = document.forms["changeEmailForm"]["newEmailConfirm"];
    
    if (validateEmail(currentEmail.value) == false)
    {
        alert("Invalid current email!");
        currentEmail.focus();
        return false;
    }
    if (validateEmail(newEmail.value) == false)
    {
        alert("Invalid new email!");
        newEmail.focus();
        return false;
    }
    if (newEmail.value != newEmailConfirm.value)
    {
        alert("Emails don't match!");
        newEmail.focus();
        return false;
    }
    if (currentEmail.value == newEmail.value)
    {
        alert("Current and new emails are the same!");
        newEmail.focus();
        return false;
    }
    
    return true;
}

function changePasswordValidation()
{
    var currentPassword = document.forms["changePasswordForm"]["currentPassword"];
    var newPassword = document.forms["changePasswordForm"]["newPassword"];
    var newPasswordConfirm = document.forms["changePasswordForm"]["newPasswordConfirm"];
    
    if (currentPassword.value.length < 8 || currentPassword.value.length > 16)
    {
        alert("Current password is invalid!");
        currentPassword.focus();
        return false;
    }
    if (newPassword.value.length < 8 || newPassword.value.length > 16)
    {
        alert("New password has to be 8 to 16 characters long!");
        newPassword.focus();
        return false;
    }
    if (newPassword.value != newPasswordConfirm.value)
    {
        alert("Passwords don't match!");
        newPassword.focus();
        return false;
    }
    if (currentPassword.value == newPassword.value)
    {
        alert("Current and new passwords are the same!");
        currentPassword.focus();
        return false;
    }
    
    return true;
}

function changeNotificationsValidation()
{
    var receiveNotifications = document.forms["notificationSettingsForm"]["receiveNotifications"];
    
    if (receiveNotifications.value == false)
    {
        alert("Select one of the options!");
        return false;
    }
    
    return true;
}

function changeSecretQuestionValidation()
{    
    var currentSecretAnswer = document.forms["changeQuestionForm"]["currentSecretAnswer"];
    var newSecretAnswer = document.forms["changeQuestionForm"]["newSecretAnswer"];
    
    if (currentSecretAnswer.value.length < 4 || currentSecretAnswer.value.length > 16)
    {
        alert("Invalid current secret answer!");
        currentSecretAnswer.focus();
        return false;
    }
    if (newSecretAnswer.value.length < 4 || newSecretAnswer.value.length > 16)
    {
        alert("New secret answer has to be 4 to 16 characters long!");
        newSecretAnswer.focus();
        return false;
    }
    
    return true;
}

function validateEmail(email) 
{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
