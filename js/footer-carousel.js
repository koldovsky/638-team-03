(function () {
    const slides =[
        `<img clasS="img-in-footer-carousel"src="img/imgs-above-footer/girl-in-white.webp" alt="girl-in-white">`,
        `<img clasS="img-in-footer-carousel"src="img/imgs-above-footer/black-bras.webp" alt="black-bras">`,
        `<img clasS="img-in-footer-carousel"src="img/imgs-above-footer/girl-on-balcony.webp" alt="girl-on-balcony">`,
        `<img clasS="img-in-footer-carousel"src="img/imgs-above-footer/two-girls-in-black.webp" alt="two-girls-in-black">`,
        `<img clasS="img-in-footer-carousel"src="img/imgs-above-footer/one-girl-in-black.webp" alt="one-girl-in-black">`,
        `<img clasS="img-in-footer-carousel"src="img/imgs-above-footer/girl-in-shirt.webp" alt="girl-in-white-shirt">`
    ];

    let currentSlide = 0;

    function showCurrentSlide () {
        const slideContainer = document.querySelector(".footer-carousel-js .footer-carousel-slide");
        slideContainer.innerHTML = slides[currentSlide];

    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }

    showCurrentSlide();


}) ();
