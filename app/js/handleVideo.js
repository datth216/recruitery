const closeButton = document.querySelector(".close");
const openVideo = document.querySelector(".button__text");

openVideo.addEventListener("click", () => {
  document.querySelector(".popup-video").style.display = "block";
});

closeButton.addEventListener("click", () => {
  document.querySelector(".popup-video").style.display = "none";
});
