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
            Message boxes
***********************************/

function changeEmail()
{
    alert("Email changed successfully!");
}

function changePassword()
{
    alert("Password changed successfully!");
}

function purchasePoints()
{
    alert("You will be redirected to payment site...");
}

function changeNotifications()
{
    alert("Notifications preference changed successfully!");
}

function changeSecretQuestion()
{
    alert("Secret question changed successfully!");
}

function addTicket()
{
    alert("Ticket has been added successfully!");
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