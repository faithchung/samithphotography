/*contact form*/
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("submit").addEventListener("click", function(){
        var form = {};
  
        var name = document.getElementById("fname").value;
        var email = document.getElementById("email").value;
  
        if(name === "" | email === ""){ //if empty stop function
            alert("Please fill in name and email");
            return;
        }
  
        form.name = name;
        form.email = email;
  
        var confirm = "Thanks " + form.name + " for signing up using the following email: " + form.email;
  
        document.getElementById("demo").innerHTML = confirm;
    });
  });