document.addEventListener("DOMContentLoaded", () => {
    // 1. Menu Hambúrguer
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-menu");
    const closeMenu = document.getElementById("close-menu");

    // Open menu
    hamburgerMenu.addEventListener("click", () => {
        navMenu.classList.add("active");
    });

    // Close menu
    closeMenu.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

    const intro = document.querySelector(".intro");

    // Remove a introdução após a animação da logo
    setTimeout(() => {
        intro.classList.add("fade-out"); // Aplica o fade-out
        setTimeout(() => intro.remove(), 500); // Remove o elemento após o fade
    }, 1500); // Duração da animação da logo (1s)
});
