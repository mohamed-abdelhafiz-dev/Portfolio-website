let scrollToBottomBtn = document.querySelector(".scroll-btn button");
let skillsNav = document.querySelector("#skills-nav");
scrollToBottomBtn.addEventListener("click", function (event) {
  window.scrollTo(0, 500);
  this.style.display = "none";
});
skillsNav.addEventListener("click", function (event) {
  window.scrollTo(0, 500);
});
window.onscroll = function (event) {
  if (window.scrollY <= 300) {
    scrollToBottomBtn.style.display = "inline";
  } else {
    scrollToBottomBtn.style.display = "none";
  }
};
let msgSubmitBtn = document.getElementById("msg-submit-btn");
msgSubmitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo(0, 0);
});
