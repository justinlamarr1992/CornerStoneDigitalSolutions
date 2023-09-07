// NavBar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});

function doModal(anchor, popupbox) {
  // Get the <span> element that closes the modal
  var span = popupbox.getElementsByClassName("close")[0];

  anchor.addEventListener("click", function (event) {
    popupbox.style.display = "block";
  });
  // anchor.addEventListener("onMouseOver", function (event) {
  //   popupbox.style.display = "block";
  // });

  span.addEventListener("click", function (event) {
    popupbox.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == popupbox) {
      popupbox.style.display = "none";
    }
  });
}

// moving circle
var circle = document.getElementsByClassName("circle");
function moveCircle(e) {
  TweenLite.to(circle, 0.3, {
    css: {
      left: e.pageX,
      top: e.pageY,
    },
  });
}
addEventListener("mousemove", moveCircle);

// Benefits Accordian
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Benefits SlideShow
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("benefits-pic");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 4000);
}

// Feature Icon selection and Text Change
var fea = document.getElementsByClassName("feature-im-tx");
var circleText = document.getElementsByClassName("circle-text");
var j;

for (j = 0; j < fea.length; j++) {
  fea[j].addEventListener("click", function () {
    console.log(circleText);
    circleText.innerHTML = "";
    circleText.appendChild(document.createTextNode("Hey this is a new text"));
  });
}
