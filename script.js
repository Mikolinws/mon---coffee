document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");

    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Эффект шапки при прокрутке
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Появление блоков при прокрутке
    const animatedElements = document.querySelectorAll(
        ".intro-content, .menu-card, .about-grid, .gallery-grid img, .contact-item"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach((element) => {
        element.classList.add("hidden");
        observer.observe(element);
    });
});