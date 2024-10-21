const modal = document.querySelector(".search-model"),
  modalBtn = document.querySelector(".icon_search"),
  search = modal.querySelector("#search-input"),
  modalClose = modal.querySelector(".search-close-switch");

console.dir(search);
search.addEventListener("change", () => {
  console.log(search.value);
});
modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});
