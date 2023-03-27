const pulse = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = document.querySelector(".contactMeBtn");
  
      if (entry.isIntersecting) {
        square.classList.add('animate__flipInY');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate__zoomIn');
    });
  });
  
  pulse.observe(document.querySelector(".contactMeBtn"));



// ************************************* Animation FUNTION *************************************


const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
                 entry.target.classList.add('animate__slideInLeft');
      }
    });
  });
  
  observer.observe(document.querySelector(".scoller"));




  const zoomIN = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
                 entry.target.classList.add('animate__zoomIn');
      }
    });
  });

zoomIN.observe(document.querySelector(".animateCards1"));
zoomIN.observe(document.querySelector(".animateCards2"));
zoomIN.observe(document.querySelector(".animateCards3"));
zoomIN.observe(document.querySelector(".animateCards4"));
zoomIN.observe(document.querySelector(".animateCards5"));

zoomIN.observe(document.querySelector(".animatePCard1"));
zoomIN.observe(document.querySelector(".animatePCard2"));
zoomIN.observe(document.querySelector(".animatePCard3"));
zoomIN.observe(document.querySelector(".animatePCard4"));
zoomIN.observe(document.querySelector(".animatePCard5"));
zoomIN.observe(document.querySelector(".animatePCard6"));

zoomIN.observe(document.querySelector(".contactMeCard1"));
zoomIN.observe(document.querySelector(".contactMeCard2"));
zoomIN.observe(document.querySelector(".contactMeCard3"));



const fadeIN = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
                 entry.target.classList.add('animate__flipInY');
      }
    });
  });


  fadeIN.observe(document.querySelector(".animateServiceCard1"));
  fadeIN.observe(document.querySelector(".animateServiceCard2"));
  fadeIN.observe(document.querySelector(".animateServiceCard3"));


  const heartBeat = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
                 entry.target.classList.add('animate__heartBeat');
      }
    });
  });

  heartBeat.observe(document.querySelector(".testimonialCard"));



//   Form TO mail Section
function sendEmail(){
    alert("Mail function is not working.. Please CONNECT through WHATSAPP OR MAIL")
    // Email.send({
    //     Host : "smtp.gmail.com",
    //     Username : "pateldeepak81300@gmail.com",
    //     Password : "81300deep@kpatel",
    //     To : "pateldeepak81300@gmail.com",
    //     From : "pateldeepak81300@gmail.com",
    //     Subject : "This is the subject",
    //     Body : "And this is the body"
    // }).then(
    //   message => alert(message)
    // );
    // console.log("mail send");
}

var hireMe =document.querySelector(".hireMe");

hireMe.addEventListener("click",function(){
    var contactMeScroll = document.querySelector(".contactMeScroll");
    contactMeScroll.scrollIntoView();

})

var letsTalk =document.querySelector(".letsTalk");

letsTalk.addEventListener("click",function(){
    var contactMeFormStart = document.querySelector("#contactMeFormStart");
    contactMeFormStart.scrollIntoView();
    console.log("Lets Talk");
})

var headerHome = document.querySelector("#headerHome");

headerHome.addEventListener("click",function(){
    var about = document.querySelector("#about");
    about.scrollIntoView();

})

var headerServices =document.getElementById("headerServices");

headerServices.addEventListener("click",function(){
    var serviceStart = document.querySelector(".serviceStart");
    serviceStart.scrollIntoView();
})



var headerPortfolio = document.querySelector("#headerPortfolio");

headerPortfolio.addEventListener("click",function(){
    var portfoilioCardCollection = document.querySelector(".portfoilioCardCollection");
    portfoilioCardCollection.scrollIntoView();

})


var headerContactUs = document.querySelector("#headerContactUs");


headerContactUs.addEventListener("click",function(){
    var contactMeScroll = document.querySelector(".contactMeScroll");
    contactMeScroll.scrollIntoView();

})

var footerHome=document.getElementById("footerHome");

footerHome.addEventListener("click",function(){
    var about = document.querySelector("#about");
    about.scrollIntoView();
})


var footerAbout=document.getElementById("footerAbout");

footerAbout.addEventListener("click",function(){
    var aboutMeStart = document.querySelector(".aboutMeStart");
    aboutMeStart.scrollIntoView();
})


var footerExperience=document.getElementById("footerExperience");

footerExperience.addEventListener("click",function(){
    var experienceStart = document.querySelector(".experienceStart");
    experienceStart.scrollIntoView();
})


var footerServices =document.getElementById("footerServices");

footerServices.addEventListener("click",function(){
    var serviceStart = document.querySelector(".serviceStart");
    serviceStart.scrollIntoView();
})


var footerPortfolio=document.getElementById("footerPortfolio");

footerPortfolio.addEventListener("click",function(){
    var portfoilioCardCollection = document.querySelector(".portfoilioCardCollection");
    portfoilioCardCollection.scrollIntoView();
})


var footerTestimonial=document.getElementById("footerTestimonial");

footerTestimonial.addEventListener("click",function(){
    var testimonialCardStart = document.querySelector(".testimonialCardStart");
    testimonialCardStart.scrollIntoView();
})

var footerContact=document.getElementById("footerContact");

footerContact.addEventListener("click",function(){
    var contactMeScroll = document.querySelector(".contactMeScroll");
    contactMeScroll.scrollIntoView();
})








function whatsapp(){
  window.location.href = "https://api.whatsapp.com/send?phone=918130036368&text=Give%20me%20further%20information%20about%20your%20services";
}





function gmail(){
  window.location.href= "https://mail.google.com/mail/?view=cm&fs=1&to=deepakpatel36368@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com";
}


const navigationBar =  document.querySelector(".navigationBar");