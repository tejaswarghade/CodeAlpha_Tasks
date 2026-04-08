let currentIndex = 0;
let images = document.querySelectorAll(".gallery img");

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  lightboxImg.src = img.src;

  images = Array.from(document.querySelectorAll(".gallery img"));
  currentIndex = images.indexOf(img);
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

/* Filter Function */
function filterSelection(category) {
  let items = document.getElementsByClassName("gallery-item");

  for (let i = 0; i < items.length; i++) {
    if (category === "all") {
      items[i].style.display = "block";
    } else {
      items[i].style.display = items[i].classList.contains(category)
        ? "block"
        : "none";
    }
  }
}
