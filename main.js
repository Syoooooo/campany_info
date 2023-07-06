(() => {

  const bookCloseNav = document.querySelector(".book-close-btn");
  const bookOpenNav = document.querySelector(".book-open-btn");
  const menuBar = document.querySelector(".menu-bar");

  bookCloseNav.onclick = () => {
    menuBar.classList.toggle("active");
    bookCloseNav.classList.toggle("active");
    bookOpenNav.classList.toggle("active");
  }
  bookOpenNav.onclick = () => {
    bookCloseNav.onclick();
  }
})();