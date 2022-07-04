const pass_field = document.querySelector(".key");

const showBtn = document.querySelector(".show");
showBtn.addEventListener("click", function () {

    if (pass_field.type === "password") {
        pass_field.type = "text";

        showBtn.textContent = "HIDE";

        showBtn.style.color = "#3498db";

    } else {

        pass_field.type = "password";

        showBtn.innerHTML = "&#128065";

        showBtn.style.color = "#222";

    }

});

var email = "a"
var senha = "1"
var logar = document.querySelector(".entra")

function Login(){
    if(document.getElementById("ie").value === email && document.getElementById("is").value === senha)
    window.location.href = "https://www.google.com/search"

    else
    window.location.reload();
    document.getElementsById("ie").input.placeholder="Algo está errado";
    //document.getElementById("ie").style.color = "red";
    
}




