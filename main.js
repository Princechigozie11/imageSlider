const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = document.querySelectorAll(".item");
current = 0;

// Clear All Images
function reset() {
  for (let index = 0; index < images.length; index++) {
    images[index].style.display = "none";
  }
}

// Initial Start
function startSlide() {
  reset();
  images[0].style.display = "block";
}
// Show Previous
function slideLeft() {
  reset();
  images[current - 1].style.display = "block";
  current--;
}
// Show Next
function slideRight() {
  images[current + 1].style.display = "block";
  current++;
}

// Left Arrow Click
prev.addEventListener("click", () => {
  if (current === 0) {
    current = images.length;
  }
  slideLeft();
});

// Right Arrow Click
next.addEventListener("click", () => {
  if (current === images.length - 1) {
    current - 1;
  }
  slideRight();
});
