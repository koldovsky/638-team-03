(function () {
    const slides = [
        `
        <div class="bestsellers__photo__gallery"><img  src="img/bestsellers/basic__underwear.webp"
        alt="basic black underwear woman"></div>
        <div class="bestsellers__photo__gallery"><img  src="img/bestsellers/limited__underwear.webp"
        alt="limited_nude_underwear_woman"></div>
        <div class="bestsellers__photo__gallery"><img  src="img/bestsellers/sets__underwear.webp"
        alt="sets_nude_underwear_woman"></div>
        <div class="bestsellers__photo__gallery"><img  src="img/bestsellers/swimwear__underwear.webp"
        alt="swimwear_underwear_white_woman"></div>
        `
    ];
    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.bestsellers__slide__carousel .slides');
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 600) {
            const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : currentSlide + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
    }
    function nextSlide(){
        currentSlide++;
        if(currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }
    function prevSlide(){
        currentSlide--;
        if(currentSlide < 0) currentSlide = slides.length - 1;
        showCurrentSlide();
    }
    setInterval(nextSlide, 2500);
    document.querySelector('.bestsellers__slide__carousel .next').addEventListener('click', nextSlide);
    document.querySelector('.bestsellers__slide__carousel .prev').addEventListener('click', prevSlide);
    window.addEventListener('resize', showCurrentSlide);
    showCurrentSlide();
})()