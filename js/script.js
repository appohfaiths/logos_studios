const tagLine = document.querySelector('.tag-line');

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector('.main-menu').classList.toggle("show");
  tagLine.classList.toggle('hide');
});
