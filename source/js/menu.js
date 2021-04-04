var toggleMenuBtn = document.querySelector(".page-header__nav-toggle");
var menu = document.querySelector(".page-header__nav-list");

menu.classList.add("page-header__nav-list--closed");
toggleMenuBtn.classList.add("page-header__nav-toggle--open");

toggleMenuBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle('page-header__nav-list--closed');
  toggleMenuBtn.classList.toggle("page-header__nav-toggle--closed");
});
