let slides = document.querySelectorAll(".slide");
let span = document.querySelector("span");
let menu = document.querySelector("ul");
let leftButton = document.querySelector("span button:first-child");
let rightButton = document.querySelector("span button:last-child");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let closeIcon = document.querySelector("[data-active='false']");

let four = [one, two, three];
let active = 0;

one.style.left = "0vw";
two.style.left = "100vw";
three.style.left = "200vw";

rightButton.addEventListener("click", () => {

    if(active >= 2) {
        four = [one, two, three];
        active = 0;
        four[0].style.left = "0vw";
        four[0].style.transition = "left 0.2s ease-in-out";
        four[1].style.left = "100vw";
        four[1].style.transition = "left 0.2s ease-in-out";
        four[2].style.left = "200vw";
        console.log(active);
    }

    else {
        ++active;
    
        four[0].style.left = (parseInt(four[0].style.left) - 100) + "vw";
        four[0].style.transition = "left 0.2s ease-in-out";
        four[1].style.left = (parseInt(four[1].style.left) - 100) + "vw";
        four[1].style.transition = "left 0.2s ease-in-out";
        four[2].style.left = (parseInt(four[2].style.left) - 100) + "vw";
        four[2].style.transition = "left 0.2s ease-in-out";
    }

});

leftButton.addEventListener("click", () => {

    --active;

    if(active < 0) {
        active = 2;
        four = [three, two, one];
        four[0].style.left = "0vw";
        four[0].style.transition = "left 0.2s ease-in-out";
        four[1].style.left = "-100vw";
        four[1].style.transition = "left 0.2s ease-in-out";
        four[2].style.left = "-200vw";
    } 
    
    else{
        four[0].style.left = (parseInt(four[0].style.left) + 100) + "vw";
        four[1].style.left = (parseInt(four[1].style.left) + 100) + "vw";
        four[2].style.left = (parseInt(four[2].style.left) + 100) + "vw";
    }

});

if(closeIcon.dataset.active === "false") {
    closeIcon.style.display = "none";
}

let hamburgerModal = document.createElement("img");
hamburgerModal.src = "/images/icon-hamburger.svg";
hamburgerModal.classList.add("hamburger");

let closeModal = document.querySelector("ul li:first-child");

if(document.body.clientWidth <= 375) {
    document.body.append(hamburgerModal);

    closeModal.addEventListener("click", () => {

        menu.classList.remove("show-menu");
    
    });
}

hamburgerModal.addEventListener("click", () => {

    menu.classList.add("show-menu");
    closeIcon.dataset.active = "true";

    if(closeIcon.dataset.active === "true") {
        closeModal.style.display = "inline-block";
    }

});
