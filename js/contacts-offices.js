(async function() {
    const response = await fetch('offices.json');
    const offices = await response.json();

    function renderOffices (offices) {
        const officesContainer = document.querySelector('.mainOffice');
        for (const office of offices) {
            officesContainer.innerHTML += `
                <article>
                    <h3>${office.title}</h3>
                    <img src="${office.image}" alt="${office.title}">
                    <p>${office.address}</p>
                    <p>${office.cityCoordinate}</p>
                    <a href="tel:${office.phoneNumber}" data-action="phone" class="phone-link">${office.phoneNumber}</a><br>
                    <a href="mailto:${office.officeMail}" data-action="email" class="email-link">${office.officeMail}</a>
                    <form action="pages/office-info.html" target="_blank">
                        <button type="submit" class="btn btn-light office-info-btn">
                            <span class="button-learn-text">More...</span>
                        </button>
                    </form> 
                </article>
            `;
        }
        document.querySelectorAll('.office-info-btn')
        
    }

renderOffices(offices);
})();