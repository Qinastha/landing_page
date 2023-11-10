function myFunction() {
    let element = document.body;
    element.classList.toggle("dark");
    const navlogo = document.querySelector(".navlogo");
    if (document.querySelector(".dark")) {
        navlogo.src = "./assets/Group 2.svg";
    } else {
        navlogo.src = "./assets/Group 1.svg";
    }
    const footerlogo = document.querySelector(".footerlogo");
    if (document.querySelector(".dark")) {
        footerlogo.src = "./assets/Group 1.svg";
    } else {
        footerlogo.src = "./assets/Group 2.svg";
    }
}

const navlogo = document.querySelector(".navlogo");
if (document.querySelector(".dark")) {
    navlogo.src = "./assets/Group 2.svg";
} else {
    navlogo.src = "./assets/Group 1.svg";
}

const footerlogo = document.querySelector(".footerlogo");
if (document.querySelector(".dark")) {
    footerlogo.src = "./assets/Group 1.svg";
} else {
    footerlogo.src = "./assets/Group 2.svg";
}

function fun() {
    alert("Nice number bro");
}

let conf = confirm("You must be over 18y.o. to visit this page");
let Name = prompt("Please enter your name", "porn_lover");
let age = prompt("How old are you?", "");

