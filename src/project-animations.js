document.addEventListener('DOMContentLoaded', function() {
    
    // El plugin ahora será encontrado y registrado correctamente
    gsap.registerPlugin(ScrollTrigger);

    // Animación de las secciones al hacer scroll
    gsap.utils.toArray('.reveal-section').forEach(section => {
        gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Lógica para iluminar el menú lateral al hacer scroll
    const sections = document.querySelectorAll('.project-content section');
    const navLinks = document.querySelectorAll('.project-nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                });

                const link = document.querySelector(`.project-nav-link[href="#${entry.target.id}"]`);
                if (link) {
                    link.classList.add('active-link');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
