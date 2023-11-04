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

if(age>=18){
    alert(`Hello ${Name}`) ;
    let porn_type = prompt ("Which typy of p**n do your prefer the most? Type 'T' for 'Transgender', 'B' for 'Bisexual', 'L' for 'Lesbian, 'G' for 'Gay'", "");
    if(porn_type=='T') {
    alert("lmaooo i didnt know you are like that dude, you mum gotta know bout this");
    }else if(porn_type=='B'){
    alert("Not too bad, but still watching this makes you an ass!!!");
    } else if(porn_type=='L') {
    alert("Hope you know this aint straight and right, i guess none of your parents is proud of yuh");
    } else if(porn_type=='G') {
    alert("Jesus, so you didnt know God forbids this, your parents too!!!");
    } }
else{
    alert(`Hi ${Name}. You cant watch this content in your ${age}. Please wait ${18-age} years to visit us!`)
}