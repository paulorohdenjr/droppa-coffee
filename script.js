document.addEventListener("DOMContentLoaded", () => {
    // 1. Menu Hambúrguer
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-menu");
    const closeMenu = document.getElementById("close-menu");

    // 2. Slides
    const slides = document.querySelector(".slides");
    const slideItems = document.querySelectorAll(".slide");
    const slideCount = slideItems.length; // Garante apenas os slides visíveis
    let currentIndex = 0;

    // 3. Efeito Parallax (Concept Image)
    const conceptImage = document.querySelector(".concept-image img");
    const conceptSection = document.querySelector(".concept");

    // 4. Intro
    const intro = document.querySelector(".intro");

    // 5. Smooth Scroll
    const links = document.querySelectorAll("a[href^='#']");

    // **Funções**

    // Abrir o menu
    hamburgerMenu.addEventListener("click", () => {
        navMenu.classList.add("active");
    });

    // Fechar o menu
    closeMenu.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

    // Remover introdução após animação
    setTimeout(() => {
        intro.classList.add("fade-out"); // Aplica o fade-out
        setTimeout(() => intro.remove(), 500); // Remove o elemento após o fade
    }, 1500); // Duração da animação da logo (1.5s)

    // Smooth Scroll
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Parallax Effect com Centralização
    window.addEventListener("scroll", () => {
        if (conceptSection) {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const conceptOffsetTop = conceptSection.offsetTop;
            const conceptHeight = conceptSection.offsetHeight;

            if (scrollY + windowHeight > conceptOffsetTop && scrollY < conceptOffsetTop + conceptHeight) {
                const middleOfViewport = scrollY + windowHeight / 2;
                const middleOfSection = conceptOffsetTop + conceptHeight / 2;
                const offset = (middleOfViewport - middleOfSection) / 5; // Ajusta o movimento
                conceptImage.style.transform = `translateY(${offset}px)`; // Aplica o efeito
            }
        }
    });

    // Slider automático
    if (slides && slideCount > 0) {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slideCount;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 2500); // Troca de slides a cada 2.5 segundos
    }

     // Elementos das logos
     const headerLogo = document.querySelector(".logo img");
     const footerLogo = document.querySelector(".footer-logo img");
 
    // Função para rolar suavemente até o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // Adicionar eventos de clique nas logos
    if (headerLogo) {
        headerLogo.addEventListener("click", (e) => {
            e.preventDefault(); // Previne comportamento padrão
            scrollToTop();
        });
    }

    if (footerLogo) {
        footerLogo.addEventListener("click", (e) => {
            e.preventDefault(); // Previne comportamento padrão
            scrollToTop();
        });
    }
});
