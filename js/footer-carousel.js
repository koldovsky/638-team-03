(function () {
    const slides =[
        `<img class="img-in-footer-carousel"src="img/imgs-above-footer/girl-in-white.webp" alt="girl-in-white">`,
        `<img class="img-in-footer-carousel"src="img/imgs-above-footer/black-bras.webp" alt="black-bras">`,
        `<img class="img-in-footer-carousel"src="img/imgs-above-footer/girl-on-balcony.webp" alt="girl-on-balcony">`,
        `<img class="img-in-footer-carousel"src="img/imgs-above-footer/two-girls-in-black.webp" alt="two-girls-in-black">`,
        `<img class="img-in-footer-carousel"src="img/imgs-above-footer/one-girl-in-black.webp" alt="one-girl-in-black">`,
        `<img class="img-in-footer-carousel"src="img/imgs-above-footer/girl-in-shirt.webp" alt="girl-in-white-shirt">`
    ];

    let currentSlide = 0;

    function showCurrentSlide () {
        const slideContainer = document.querySelector(".footer-carousel-js .footer-carousel-slide");
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 480) {
            const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            
        }

    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showCurrentSlide();
    }

    document.querySelector(".footer-carousel-js .next-footer-slide").addEventListener("click", nextSlide)
    document.querySelector(".footer-carousel-js .prev-footer-slide").addEventListener("click", prevSlide)
    
    showCurrentSlide();


}) ();
