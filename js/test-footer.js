(function ()  {
    const computerTime = document.querySelector('.clock');
    
    setInterval( () => computerTime.innerText = new Date().toLocaleTimeString(),
    1000 );

    const currentTime = document.querySelector('.clock')

}) ()