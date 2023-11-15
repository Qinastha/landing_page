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
