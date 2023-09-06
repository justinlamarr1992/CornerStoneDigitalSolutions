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

// Team
function changeToMember1() {
  var member1 = document.getElementById("team-pic-member1");
  var member2 = document.getElementById("team-pic-member2");
  member1.classList.add("displayBlock");
  member2.classList.remove("displayBlock");
  member2.classList.remove("displayNone");
  member1.classList.add("displayNone");
  return false;
}
function changeToMember2() {
  var member2 = document.getElementById("team-pic-member2");
  var member1 = document.getElementById("team-pic-member2");
  member2.classList.add("displayBlock");
  member1.classList.remove("displayBlock");
  member1.classList.remove("displayNone");
  member2.classList.add("displayNone");
  return false;
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
