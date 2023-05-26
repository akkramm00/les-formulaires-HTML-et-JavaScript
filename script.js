//EXERCICE : controlons le format de l'e-mail à l'aide de l'expression régulière suivante :
// /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/.

//1° => Déclarer les variables :
let email = document.getElementById("email")
let form = document.querySelector("form")
let error = document.getElementById("error");
let password = document.getElementById("password")

// le script de vérification de l'email :

var regexEmail = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/

email.addEventListener('input', (event) => {
  if (!regexEmail.test(event.target.value)) {
    error.innerText = 'Le format de l\'email est incorrect'
  } else {
    error.innerText = ''
  }
});

// Contrôlez que le mot de passe comporte au moins 8 caractères:
password.addEventListener('input' , (event) =>{
    if (event.target.value.length < 8 ) {
        error.innerText ='le mot de passe doit contenir au moins 8 caractères' 
    }else{
error.innerText = ''
    }
});
 
//une fois les conditions sont respectés, on procède à la validation fu formulaire :

form.addEventListener('submit', (event) => {
  if (error.innerText !== '') {
    event.preventDefault()
    alert("Le formulaire contient des erreurs et n'a pas été envoyé")
  }
})