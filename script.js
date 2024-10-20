// function to show image when we click on a image
function showImage(imageSrc) {
  let popupImage = document.getElementById("popupImage");
  popupImage.src = imageSrc;

  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "block";
  document.body.style.overflow = "hidden";
}
// function to hide the image when we click on cross button
function closeImage() {
  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "none";
  document.body.style.overflow = "auto";
}

function myFunction() {
  var x = document.getElementById("menu-bar");
  if (x.className === "menu-bar-collapse") {
    x.className += " responsive";
  } else {
    x.className = "menu-bar-collapse";
  }
}

jQuery(document).ready(function ($) {
  jQuery(".icon a,.width-33 a").attr("target", "blank");
});

$(window).scroll(function () {
  var sticky = $(".main-panel"),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});

let options = {
  startAngle: -1.55,
  size: 100,
  value: 0.8,
  fill: { gradient: ["#ffbf35"] },
};
$(".circle .bar")
  .circleProgress(options)
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .parent()
      .find("span")
      .text(String(stepValue.toFixed(2).substr(2)));
  });
$(".js .bar").circleProgress({
  value: 0.85,
});
$(".node .bar").circleProgress({
  value: 0.5,
});
$(".react .bar").circleProgress({
  value: 0.85,
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Add active class to the current button (highlight it)
var header = document.getElementById("menu-link-bar");
var btns = header.getElementsByClassName("menu-text-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// contact form
function SendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "forportfoliowork@gmail.com",
    Password: "EF62069777A837BDB3762AF324AF7E6024AD",
    To: "forportfoliowork@gmail.com",
    From: "forportfoliowork@gmail.com",
    Subject: "message from contact form",
    Body:
      "Name : " +
      document.getElementById("firstname").value +
      document.getElementById("lastname").value +
      "<br> Email : " +
      document.getElementById("email").value +
      "<br> Phone No : " +
      document.getElementById("number").value +
      "<br> Message : " +
      document.getElementById("message").value,
  }).then((message) => alert("Message Succesfully Sent"));
}

$(document).ready(function () {
  $(".header-menu-link").click(function () {
    $("menu-bar-collapse").removeClass("responsive");
  });
});
