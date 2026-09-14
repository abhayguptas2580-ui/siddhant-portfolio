/* ========================================
   THEME BUTTON
======================================== */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      themeBtn.textContent = "☀️";
    } else {
      themeBtn.textContent = "🌙";
    }

  });

}


/* ========================================
   MOBILE MENU
======================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
      menuBtn.textContent = "✕";
    } else {
      menuBtn.textContent = "☰";
    }

  });

}


/* ========================================
   CLOSE MOBILE MENU
======================================== */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {

  link.addEventListener("click", () => {

    if (navLinks) {
      navLinks.classList.remove("show");
    }

    if (menuBtn) {
      menuBtn.textContent = "☰";
    }

  });

});


/* ========================================
   HERO CONTACT BUTTON
======================================== */

const contactBtn = document.getElementById("contactBtn");
const contactSection = document.getElementById("contact");

if (contactBtn && contactSection) {

  contactBtn.addEventListener("click", () => {

    contactSection.scrollIntoView({
      behavior: "smooth"
    });

  });

}


/* ========================================
   WELCOME SCREEN
======================================== */

const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("Welcomescreen");

if (enterBtn && welcomeScreen) {

  enterBtn.addEventListener("click", () => {

    welcomeScreen.classList.add("hide");

    document.body.classList.remove("portfolio-hidden");

  });

}


/* ========================================
   TYPING EFFECT
======================================== */

const typingElement = document.getElementById("typing");

const texts = [
  "I'm a student & aspiring tech engineer",
  "I'm learning HTML, CSS & JavaScript",
  "I'm building my first portfolio",
  "I'm improving my coding skills every day"
];

let textIndex = 0;
let charIndex = 0;

function typeText() {

  if (!typingElement) {
    return;
  }

  const currentText = texts[textIndex];

  if (charIndex < currentText.length) {

    typingElement.textContent +=
      currentText.charAt(charIndex);

    charIndex++;

    setTimeout(typeText, 80);

  } else {

    setTimeout(() => {

      typingElement.textContent = "";

      charIndex = 0;

      textIndex++;

      if (textIndex >= texts.length) {
        textIndex = 0;
      }

      typeText();

    }, 1200);

  }

}

typeText();


/* ========================================
   RAIN ANIMATION
======================================== */

const rain = document.getElementById("rain");

if (rain) {

  for (let i = 0; i < 120; i++) {

    const drop = document.createElement("span");

    drop.classList.add("raindrop");

    drop.style.left =
      Math.random() * 100 + "%";

    drop.style.animationDuration =
      (0.5 + Math.random() * 0.8) + "s";

    drop.style.animationDelay =
      Math.random() * 2 + "s";

    drop.style.opacity =
      0.2 + Math.random() * 0.5;

    rain.appendChild(drop);

  }

}


/* ========================================
   SCROLL REVEAL
======================================== */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

  reveals.forEach((element) => {

    const elementTop =
      element.getBoundingClientRect().top;

    const windowHeight =
      window.innerHeight;

    if (elementTop < windowHeight - 100) {

      element.classList.add("active");

    }

  });

}

window.addEventListener(
  "scroll",
  revealOnScroll,
  { passive: true }
);

revealOnScroll();


/* ========================================
   STAGGER CARD ANIMATION
======================================== */

const cardSections = document.querySelectorAll(
  "#about, #skills, #projects, #journey"
);

const cardObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show-cards");

      }

    });

  },
  {
    threshold: 0.15
  }
);

cardSections.forEach((section) => {

  cardObserver.observe(section);

});