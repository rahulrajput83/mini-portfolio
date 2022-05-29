const projectbtn = document.querySelector(".projects");
const skillsbtn = document.querySelector(".skills");
const contactbtn = document.querySelector(".contact");
const project_container = document.querySelector(".container1");
const skills_container = document.querySelector(".skills_detail");
const contact_container = document.querySelector(".contact_me");



projectbtn.addEventListener("click", function() {
    projectbtn.style.background = "white";
    projectbtn.style.color = "#0A6DF2";
    loader.style.display = "block";
    contactbtn.style.background = "#0A6DF2";
    contactbtn.style.color = "white";
    contact_container.style.display = "none";
    skillsbtn.style.background = "#0A6DF2";
    skillsbtn.style.color = "white";
    skills_container.style.display = "none";
    setTimeout(function() {
        loader.style.display = "none";
        project_container.style.display = "grid";
    },1500)
})

skillsbtn.addEventListener("click", function() {
    projectbtn.style.background = "#0A6DF2";
    projectbtn.style.color = "white";
    project_container.style.display = "none";
    contactbtn.style.background = "#0A6DF2";
    contactbtn.style.color = "white";
    contact_container.style.display = "none"
    skillsbtn.style.background = "white";
    skillsbtn.style.color = "#0A6DF2";
    loader.style.display = "block";
    setTimeout(function() {
        loader.style.display = "none";
        skills_container.style.display = "flex";
    },1500)
})

contactbtn.addEventListener("click", function() {
    projectbtn.style.background = "#0A6DF2";
    projectbtn.style.color = "white";
    project_container.style.display = "none";
    skillsbtn.style.background = "#0A6DF2";
    skillsbtn.style.color = "white";
    skills_container.style.display = "none";
    contactbtn.style.background = "white";
    contactbtn.style.color = "#0A6DF2";
    loader.style.display = "block";
    setTimeout(function() {
        loader.style.display = "none";
        contact_container.style.display = "block";
    },1500)
})
