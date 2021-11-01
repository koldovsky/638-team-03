(function() {
    const office = JSON.parse(localStorage.office);
    const officeContainer = document.querySelector('singleOffice');
    officeContainer.innerHTML = `
        <h3>${office.title}</h3>
        <img src="${office.image}" alt="${office.title}">
    `;
})();