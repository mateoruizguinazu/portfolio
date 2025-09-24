
document.addEventListener('DOMContentLoaded', function() {
    // Animación para el texto de la página de contacto
    gsap.fromTo(".reveal-text", 
        { opacity: 0, y: 20 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: "power3.out",
            stagger: 0.2, // Cada elemento aparece secuencialmente
            delay: 0.5 // Pequeño retraso antes de que empiece la primera animación
        }
    );
});