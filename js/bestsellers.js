(async function () {
    // carousel
    const slides = [
        
        `<div class="bestsellers__photo__gallery"><img  src="img/bestsellers/basic__underwear.webp"
        alt="basic black underwear woman"></div>`,
        `<div class="bestsellers__photo__gallery"><img  src="img/bestsellers/limited__underwear.webp"
        alt="limited_nude_underwear_woman"></div>`,
        `<div class="bestsellers__photo__gallery"><img  src="img/bestsellers/sets__underwear.webp"
        alt="sets_nude_underwear_woman"></div>`,
        `<div class="bestsellers__photo__gallery"><img  src="img/bestsellers/swimwear__underwear.webp"
        alt="swimwear_underwear_white_woman"></div>`,
        
    ];
    // const response = await fetch('bestsellers.json');
    // const images = await response.json();
    // const slides = images.map(img => `<div>img src="${img.image} alt="${img.image}"</div>` );

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
    
    document.querySelector('.bestsellers__slide__carousel .next').addEventListener('click', nextSlide);
    document.querySelector('.bestsellers__slide__carousel .prev').addEventListener('click', prevSlide);
    window.addEventListener('resize', showCurrentSlide);
    showCurrentSlide();


    // Countdown 
    function getTimeRemaining(endtimes) {
        const total = Date.parse(endtimes) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        
        return {
          total,
          days,
          hours,
          minutes,
          seconds
        };
      }
      
      function initializeClock(id, endtime) {
        const clock = document.getElementById(id);
        const daysSpan = clock.querySelector('.days');
        const hoursSpan = clock.querySelector('.hours');
        const minutesSpan = clock.querySelector('.minutes');
        const secondsSpan = clock.querySelector('.seconds');
      
        function updateClock() {
          const t = getTimeRemaining(endtime);
      
          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
      
        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
      }
      
      const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
      initializeClock('clockdiv', deadline);

})()