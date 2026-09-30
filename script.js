// =========================
// SPEAKUP WEBSITE JAVASCRIPT
// =========================


// Page load hone par message
console.log("SpeakUp website loaded successfully!");


// Navigation links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("Navigation clicked:", link.textContent);

    });

});


// Course cards
const courseCards = document.querySelectorAll(".course-card");

courseCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const courseName = card.querySelector("h3").textContent;

        console.log("Course selected:", courseName);

    });

});


// Activity cards
const activities = document.querySelectorAll(".activity");

activities.forEach(function (activity) {

    activity.addEventListener("click", function () {

        const activityName = activity.querySelector("h3").textContent;

        console.log("Activity selected:", activityName);

    });

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(function (element) {

        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
// =========================
// COURSE MODAL
// =========================

const courseModal = document.getElementById("courseModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalButton = document.getElementById("modalButton");

const courseInformation = {

    "Spoken English": {
        description:
            "Improve your everyday English speaking, conversation skills, fluency and confidence through practical speaking activities."
    },

    "English Grammar": {
        description:
            "Build a strong understanding of English grammar with clear explanations, examples and practical exercises."
    },

    "Vocabulary": {
        description:
            "Expand your English vocabulary and learn how to use new words naturally in conversations and writing."
    },

    "Pronunciation": {
        description:
            "Improve your English pronunciation, word stress and clarity so you can communicate more confidently."
    }

};


courseCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const courseName =
            card.querySelector("h3").textContent;

        const course =
            courseInformation[courseName];

        modalTitle.textContent = courseName;

modalDescription.textContent =
    course.description;

modalButton.href =
    "https://wa.me/923140330282?text=" +
    encodeURIComponent(
        "Hello SpeakUp! I am interested in the " +
        courseName +
        " course."
    );

courseModal.classList.add("active");

    });

});



// Close modal

closeModal.addEventListener("click", function () {

    courseModal.classList.remove("active");

});


// Close when clicking outside the box

courseModal.addEventListener("click", function (event) {

    if (event.target === courseModal) {

        courseModal.classList.remove("active");

    }

});
// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    // Check empty fields

    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }


    // Simple email check

    if (!email.includes("@") || !email.includes(".")) {

        formMessage.textContent =
            "Please enter a valid email address.";

        return;
    }

// Show loading message

const submitButton =
    contactForm.querySelector("button");

submitButton.textContent =
    "Opening WhatsApp...";
    // Create WhatsApp message

const whatsappNumber = "923140330282";

const whatsappMessage =
    "Hello SpeakUp!%0A%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Email: " + encodeURIComponent(email) + "%0A" +
    "Message: " + encodeURIComponent(message);

const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    whatsappMessage;

window.open(whatsappURL, "_blank");
// Success message

formMessage.textContent =
    "Your message is ready to send on WhatsApp.";

formMessage.style.color = "#2563eb";

// Clear form

contactForm.reset();

// Restore button

submitButton.textContent =
    "Send Message";
    
    // Clear form

    contactForm.reset();

});
// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");
const navigationLinks = document.querySelectorAll("nav a");


menuToggle.addEventListener("click", function () {

    nav.classList.toggle("active");

});


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});
// =========================
// ACTIVE NAVIGATION LINK
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});
// =========================
// ACTIVITY MODAL
// =========================

const activityModal = document.getElementById("activityModal");
const closeActivityModal =
    document.getElementById("closeActivityModal");

const activityModalTitle =
    document.getElementById("activityModalTitle");

const activityModalDescription =
    document.getElementById("activityModalDescription");

const activityModalButton =
    document.getElementById("activityModalButton");


const activityInformation = {

    "🎤 Speaking Practice": {
        description:
            "Practice real-life English conversations and improve your speaking confidence, fluency and communication skills."
    },

    "💬 Group Discussions": {
        description:
            "Share your ideas, listen to others and improve your communication skills through interactive group discussions."
    },

    "⚡ Debates": {
        description:
            "Develop confidence, fluency and critical thinking by expressing and defending your ideas in English."
    },

    "🎬 Audio & Video": {
        description:
            "Improve listening, pronunciation and communication skills through interesting English audio and video activities."
    }

};


activities.forEach(function (activity) {

    activity.addEventListener("click", function () {

        const activityName =
            activity.querySelector("h3").textContent;

        const activityData =
            activityInformation[activityName];

        if (activityData) {

            activityModalTitle.textContent =
                activityName;

            activityModalDescription.textContent =
                activityData.description;

            activityModalButton.href =
    "https://wa.me/923140330282?text=" +
    encodeURIComponent(
        "Hello SpeakUp! I am interested in joining the " +
        activityName +
        " activity."
    );
        }
        activityModal.classList.add("active");

    });

});


closeActivityModal.addEventListener("click", function () {

    activityModal.classList.remove("active");

});


activityModal.addEventListener("click", function (event) {

    if (event.target === activityModal) {

        activityModal.classList.remove("active");

    }

});