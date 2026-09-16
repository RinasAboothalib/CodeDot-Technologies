// =========================================
// Mobile Navigation
// =========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// =========================================
// Close Mobile Menu After Link Click
// =========================================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});

// =========================================
// Scroll-to-Top Button
// =========================================

const scrollTopButton = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        scrollTopButton.classList.add("show");
    } else {
        scrollTopButton.classList.remove("show");
    }

});

scrollTopButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================================
// Active Navigation Link
// =========================================

const currentPage = window.location.pathname.split("/").pop() || "index.html";

navigationLinks.forEach((link) => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {

        link.classList.add("active");

        link.setAttribute("aria-current", "page");

    }

});


// =========================================
// Scroll Reveal Animation
// =========================================

const revealElements = document.querySelectorAll(
    ".services-preview, .about-preview, .why-choose-us, .portfolio-preview, .final-cta"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});

// =========================================
// Portfolio Filtering
// =========================================

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedFilter = button.getAttribute("data-filter");

        filterButtons.forEach((filterButton) => {
            filterButton.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach((card) => {

            const cardCategory = card.getAttribute("data-category");

            if (
                selectedFilter === "all" ||
                cardCategory === selectedFilter
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

});