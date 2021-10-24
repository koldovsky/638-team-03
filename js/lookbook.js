(function() {
    const lookbookImages = [
        '<img src="img/lookbook/beige-detail.png" alt="beige-detail">',
        '<img src="img/lookbook/beige-top.png" alt="beige-top">',
        '<img src="img/lookbook/black-top.png" alt="black-top">',
        '<img src="img/lookbook/girl-in-black-bra.png" alt="girl-in-black-bra">',
        '<img src="img/lookbook/girl-in-curtains.png" alt="girl-in-curtains">',
        '<img src="img/lookbook/girl-sitting-on-bed.png" alt="girl-sitting-on-bed">',
    ];
    let lookbookImage = 0;
    function showLookbookImage () {
        const lookbookImagesContainer = document.querySelector('.lookbook-carousel .slide');
        lookbookImagesContainer.innerHTML = lookbookImages[lookbookImage];
    }
} ()