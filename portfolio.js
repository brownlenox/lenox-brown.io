// preloader
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector(".preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }, 5000);
});

// email.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("email-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Collect form data
      const formData = new FormData(form);
  
      emailjs
        .send(emailjsConfig.serviceID, emailjsConfig.templateID, formData)
        .then(function (response) {
          console.log("Email sent successfully!", response);
          alert(
            "Your message has been sent successfully! We'll get back to you soon."
          );
          form.reset();
        })
        .catch(function (error) {
          console.error("Email sending failed:", error);
          alert(
            "Email sending failed. Please try again later!"
          );
        });
    });
  });


function displayStatement() {
    const statement = "Lenox Brown is an android developer and machine learning engineer, plus experience in python programming";
    const statementElement = statement.split(" ");
    let i = 0;
    let interval;

    
        interval = setInterval(() => {
            document.getElementById("statement").innerHTML += statementElement[i] + " ";
            i++;
        if ( i == statementElement.length) {
            clearInterval(interval);
            setTimeout(() => {
                clearInterval(interval);
                document.getElementById("statement").innerHTML = "";
                displayStatement();
            }, 500);
        }
    }, 300);
}

displayStatement();



var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
}


















var sidemen = document.getElementById("sidemenu");

    function openmenu() {
        sidemen.style.right = "0";
    }
    function closemenu() {
        sidemen.style.right = "-200px";
}