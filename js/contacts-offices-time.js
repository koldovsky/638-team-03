setInterval(function () {
  var time = new Date();
  var clock = document.querySelector('.timeNow');
  clock.innerHTML = time.toLocaleTimeString();
  }, 1000);