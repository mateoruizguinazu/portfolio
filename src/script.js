document.addEventListener('DOMContentLoaded', function () {

    // --- Animación del Título ---
    const words = gsap.utils.toArray('.highlight-word');
    const colors = ['#FFC700', '#00F0B5', '#8E44AD'];

    let mainTimeline = gsap.timeline({
        repeat: -1,
    });

    words.forEach((word, index) => {
        const bg = word.querySelector('.highlight-bg');
        const wordTimeline = gsap.timeline();
        wordTimeline.to(bg, {
            scaleX: 1,
            transformOrigin: 'left',
            duration: 0.4,
            backgroundColor: colors[index],
            ease: 'power2.in',
        })
        .to(bg, {
            scaleX: 0,
            transformOrigin: 'right',
            duration: 0.4,
            ease: 'power2.out',
        }, '+=1.5');
        
        mainTimeline.add(wordTimeline, index === 0 ? "+=1" : ">");
    });


    // --- SwiperJS Carousel (con movimiento infinito y constante) ---
    const swiper = new Swiper('.project-carousel', {
        speed: 4000, // Aumenta la duración para un desplazamiento más lento y suave
        autoplay: {
            delay: 0, // CAMBIO: Delay en 0 para que no haya pausa entre transiciones
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 16,
        grabCursor: true,
    });
});
