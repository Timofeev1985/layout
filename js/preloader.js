const prelaoder = document.querySelector(".preloder");
prelaoder.classList.add("active");
setTimeout(() => {
  prelaoder.classList.remove("active");
}, 500);
