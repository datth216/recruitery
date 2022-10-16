const questions = document.querySelectorAll(".question-item");
questions.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      document
        .querySelector(".question-item.active")
        ?.classList.remove("active");
      item.classList.add("active");
    }
  });
});
