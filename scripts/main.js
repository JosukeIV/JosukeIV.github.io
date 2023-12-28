let navigation = document.querySelector('.nav')

/*document.addEventListener("DOMContentLoaded", function() {
    let all = document.querySelector('*')
    all.style.filter = "blur(5px)"

    let popupSignUp = document.querySelector('.popup')
    popupSignUp.addEventListener('click', function(){
        popupSignUp.style.filter = "none"
    })
})*/

document.querySelector('.icon-menu-main').addEventListener('click', function (){
    navigation.classList.remove("nav")
    navigation.classList.add("nav-onclick")
})

document.querySelector('.icon-fermer-nav').addEventListener('click', function (){
    navigation.classList.remove("nav-onclick")
    navigation.classList.add("nav")
})
/* --- Connexion ---*/
function Utilisateur (nom) {
    this.nom = nom
}

function enregistrement (){
    let utilisateur = new Utilisateur()

    
}