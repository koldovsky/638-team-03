(function() {
    const lookbookslides = [
        '<img src="img/lookbook/beige-detail.png" alt="beige-detail">',
        '<img src="img/lookbook/beige-top.png" alt="beige-top">',
        '<img src="img/lookbook/black-top.png" alt="black-top">',
        '<img src="img/lookbook/girl-in-black-bra.png" alt="girl-in-black-bra">',
        '<img src="img/lookbook/girl-in-curtains.png" alt="girl-in-curtains">',
        '<img src="img/lookbook/girl-sitting-on-bed.png" alt="girl-sitting-on-bed">',
    ];
    let currentlookbookslide = 0;
    function showcurrentlookbookslide () {
        const lookbookslideContainer = document.querySelector('.lookbook-carousel .lookbook-slides');
        lookbookslideContainer.innerHTML = lookbookslides[currentlookbookslide];
    }
    function nextLookbookslide (){
        currentlookbookslide++;
        if (currentlookbookslide >= lookbookslides.length) currentlookbookslide = 0;
        showcurrentlookbookslide();
    }
    document.querySelector('.lookbook-carousel .lookbook-slides').addEventListener('click', nextLookbookslide);
/*setInterval (nextLookbookslide, 1500);*/
   showcurrentlookbookslide();
} )();

