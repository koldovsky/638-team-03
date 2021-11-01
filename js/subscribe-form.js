(function () {

    const form = document.querySelector(".subscribe-in-footer-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.querySelector(".footer-subscribe-form-status");
      const data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

}) ();