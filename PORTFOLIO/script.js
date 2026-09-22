/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");


if (menuButton) {

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("open");

    });

}


/* =========================
   DARK / LIGHT MODE
========================= */

const themeButton = document.getElementById("themeButton");

const savedTheme = localStorage.getItem("theme");


/*
   Light mode is the default.
   If the user previously selected dark mode,
   load dark mode instead.
*/

if (savedTheme === "dark") {

    document.documentElement.setAttribute(
        "data-theme",
        "dark"
    );

}


/* Change theme when button is clicked */

if (themeButton) {

    themeButton.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");


        if (currentTheme === "dark") {

            /* Switch to light mode */

            document.documentElement.removeAttribute(
                "data-theme"
            );

            localStorage.setItem(
                "theme",
                "light"
            );

            themeButton.textContent = "☾";

        } else {

            /* Switch to dark mode */

            document.documentElement.setAttribute(
                "data-theme",
                "dark"
            );

            localStorage.setItem(
                "theme",
                "dark"
            );

            themeButton.textContent = "☀";

        }

    });

}


/* Set correct icon when page loads */

if (themeButton) {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");


    if (currentTheme === "dark") {

        themeButton.textContent = "☀";

    } else {

        themeButton.textContent = "☾";

    }

}


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            document.getElementById("formMessage").textContent =
                "Thanks! Your message is ready to be sent.";

            contactForm.reset();

        }
    );

}
