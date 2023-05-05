// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
const nav = document.querySelector("nav");
const imgImprovise = document.getElementById("improviseright");
const popUp = document.querySelector(".pop-up");
const closeBtn = document.getElementById("closeBtn");
let playOnce = true;



window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.style.height = "50px";

    } else {
        nav.style.height = "100px";
    }

    //pour faire apparaitre l'image #improviseright quand le curseur est à son niveau quelque soir la taille de l'écran , il va falloir crée une formule un poucentage. Pour avoir la taille total de l'écran avec la console on peu , ça nous donne la taille de l'écran ... pour créer un poucentage il faudra donc diviser le niveau de scroll sur la taille de l'écran , mais ça nous donne 66% car il ne compte pas le  innerHeight.et ça donne console.log((window.scrollY + window.innerHeight) /document.body.offsetHeight)


    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;


    if (scrollValue > 0.45) {
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = "none";
    }

    if (scrollValue > 0.85 && playOnce) {
        popUp.style.opacity = 1;
        popUp.style.transform = "none";
        playOnce = false;
    }


});

closeBtn.addEventListener("click", () => {

    popUp.style.opacity = 0;
    popUp.style.transform = "translateX(500px)";
});