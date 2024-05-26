const reviews = [
    {
        id: 1,
        name: "Pratiksha Shapane",
        role: "Software Developer, Amravati",
        img: "1.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur perferendis deleniti explicabo ex consequuntur deserunt, quaerat id quos nesciunt."
    },
    {
        id: 2,
        name: "Nikita Sirsat",
        role: "Frontend Developer, Akola",
        img: "2.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur perferendis deleniti explicabo ex consequuntur deserunt, quaerat id quos nesciunt."
    },
    {
        id: 3,
        name: "Dhanashri Nimbhorkar",
        role: "Backend Developer, Morshi",
        img: "3.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur perferendis deleniti explicabo ex consequuntur deserunt, quaerat id quos nesciunt."
    },
    {
        id: 4,
        name: "Avantika Kende",
        role: "Fullstack Developer, Paratwada",
        img: "4.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur perferendis deleniti explicabo ex consequuntur deserunt, quaerat id quos nesciunt."
    }
];

const img = document.getElementById("person-img");
const name = document.getElementById("name");
const role = document.getElementById("role");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    name.textContent = item.name;
    role.textContent = item.role;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});