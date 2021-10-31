(function() {
    const offices = [
        {
            id: '1',
            title:  'Head office in London',
            image: 'img/contacts/offices.jpg',
            address: 'Level 17, Dashwood House',
            cityCoordinate: 'London EC2M 1QS',
            phoneNumber: '+1 (234) 567 89 00',
            officeMail: 'mywebsite@email.com'  
        },
        {
            id: '2',
            title:  'Vienna office',
            image: 'img/contacts/offices.jpg',
            address: 'Kaerntner Ring 5-7',
            cityCoordinate: '1010 Vienna',
            phoneNumber: '+1 (234) 567 89 00',
            officeMail: 'mywebsite@email.com'  
        },
        {
            id: '3',
            title:  'Amsterdam office',
            image: 'img/contacts/offices.jpg',
            address: 'Keizersgracht 62-64',
            cityCoordinate: '1015 CS Amsterdam',
            phoneNumber: '+1 (234) 567 89 00',
            officeMail: 'mywebsite@email.com'  
        }
    ];

    function renderOffices (offices) {
        const officesContainer = document.querySelector('.mainOffice');
        for (const office of offices) {
            officesContainer.innerHTML += `
                <article>
                    <h3>${office.title}</h3>
                    <img src="${office.image}" alt="${office.title}">
                    <p>${office.address}</p>
                    <p>${office.cityCoordinate}</p>
                    <p class="timeNow"></p>
                    <a href="tel:${office.phoneNumber}" data-action="phone" class="phone-link">${office.phoneNumber}</a><br>
                    <a href="mailto:${office.officeMail}" data-action="email" class="email-link">${office.officeMail}</a>
                </article>
            `;
        }
        
    }

renderOffices(offices);
})();