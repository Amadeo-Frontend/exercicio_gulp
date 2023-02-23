//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", this.window.scrollY > 300);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
