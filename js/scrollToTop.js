const scrollToTop = () => {
  const toBtn = document.querySelector("#scrollToTopButton");

  toBtn.addEventListener("click", (event) => {
    event.preventDefault();
    seamless.scrollIntoView(document.querySelector(".header"), {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
};
scrollToTop();
