document.addEventListener("DOMContentLoaded", () => {
  const navbarMenu = document.querySelector(".navbar .links");
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const hideMenuBtn = navbarMenu.querySelector(".close-btn");
  const showPopupBtn = document.querySelector(".login-btn");
  const formPopup = document.querySelector(".form-popup");
  const hidePopupBtn = formPopup.querySelector(".close-btn");
  const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

  if (navbarMenu && hamburgerBtn && hideMenuBtn) {
    // Show mobile menu
    hamburgerBtn.addEventListener("click", () => {
      navbarMenu.classList.toggle("show-menu");
    });

    // Hide mobile menu
    hideMenuBtn.addEventListener("click", () => {
      navbarMenu.classList.remove("show-menu");
    });
  }

  if (showPopupBtn && formPopup && hidePopupBtn) {
    // Show login popup
    showPopupBtn.addEventListener("click", () => {
      document.body.classList.add("show-popup");
    });

    // Hide login popup
    hidePopupBtn.addEventListener("click", () => {
      document.body.classList.remove("show-popup");
    });

    // Show or hide signup form
    signupLoginLink.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList.toggle("show-signup", link.id === "signup-link");
      });
    });
  }
});
