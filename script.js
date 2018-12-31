var objAccounts = [
    {
        username: "admin",
        password: "temp"
    },
    {
        username: "dawid",
        password: "grad"
    }
]

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
                alert("You have successfully logged in!");
                userLoggedIn();
                
                document.cookie = "loggedIn=true";
                
                return
            }
            
            alert("Invalid password!")
        }
    }
    
    alert("The account could not be found!");
}

function userLoggedIn()
{
    document.getElementById("loginButton").style.display = "none";
    document.getElementById("registerButton").style.display = "none";
    document.getElementById("logoutButton").style.display = "initial";
}

function userLoggedOut()
{
    document.getElementById("loginButton").style.display = "initial";
    document.getElementById("registerButton").style.display = "initial";
    document.getElementById("logoutButton").style.display = "none";
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