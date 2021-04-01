const trailer = document.querySelector(".trailer");
const play = document.querySelector(".play");
const closedIcon = document.querySelector(".close");
const video = document.querySelector("video");

const toggleVideo = (e) => {
  e.preventDefault();
  trailer.classList.toggle("active");
  video.currentTime = 0;
  video.pause();
};

play.addEventListener("click", toggleVideo);
closedIcon.addEventListener("click", toggleVideo);
