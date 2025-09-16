document.addEventListener('DOMContentLoaded', () => {

    // Registrar el plugin de ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // --- MANEJO DEL MENÚ HAMBURGUESA ---
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.fullscreen-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Cierra el menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // --- ANIMACIÓN HERO SECTION ---
    // El video se agranda hasta ocupar toda la pantalla al hacer scroll
    gsap.to(".video-container", {
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: ".hero-section", // Fija la sección hero mientras dura la animación
        },
        width: "100vw",
        height: "100vh",
        ease: "power1.inOut"
    });

    // --- EFECTO PARALLAX EN IMAGEN 'ABOUT' ---
    const parallaxImage = document.querySelector('.parallax-image');
    const aboutSection = document.querySelector('.about-section');
    
    aboutSection.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = aboutSection;

        // Calcula el movimiento del -1 a 1
        const moveX = (clientX / offsetWidth - 0.5) * 2;
        const moveY = (clientY / offsetHeight - 0.5) * 2;

        gsap.to(parallaxImage, {
            x: moveX * 20, // Multiplicador para la intensidad del efecto
            y: moveY * 20,
            duration: 0.5,
            ease: "power2.out"
        });
    });


    // --- ANIMACIÓN HORIZONTAL 'MY WORK' ---
    // Referencia: https://greensock.com/docs/v3/Plugins/ScrollTrigger/Examples/HorizontalScrolling
    const projectsTrack = document.querySelector(".projects-track");
    const projectCards = gsap.utils.toArray(".project-card");

    // Usamos xPercent para mover el track horizontalmente
    gsap.to(projectsTrack, {
        xPercent: -100 * (projectCards.length - 1), // Mueve el track a la izquierda
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-scroll-container",
            pin: true,
            scrub: 1, // Suaviza el movimiento al scrollear
            // La animación termina cuando el último proyecto está completamente a la vista
            end: () => "+=" + projectsTrack.offsetWidth
        }
    });

});