const slidesArea = document.querySelector("section .images-slides");
const images = slidesArea.querySelectorAll("img");

let currentSlideImage = 0;
let currentZindex = 1;

// Update current slide imagem on click event
slidesArea.addEventListener("click", function () {
  currentSlideImage = currentSlideImage + 1;

  if (currentSlideImage > images.length - 1) {
    currentSlideImage = 0;
  }

  currentZindex = currentZindex + 1;

  images.forEach(image => {
    image.style.animation = "";
  })

  images[currentSlideImage].style.zIndex = currentZindex;
  images[currentSlideImage].style.animation = "fade 0.5s";
})

// Change all images position to random places on mouseenter event
slidesArea.addEventListener("mouseenter", function () {
  images.forEach(image => {
    // Define xPosition and yPosition as a random number between -50 and 50.
    // The gap between -50 and 50 is 100 so we're goind to multiply the random number by 100
    // to get it to go between 0 and 100 instead of 0 and 1.
    // Then to get it from 0 to 100 to -50 to 50, we need to subtract 50.
    // const xPosition = 100 * Math.random() - 50;
    // const yPosition = 100 * Math.random() - 50;

    // Define xPosition and yPosition as a random number between the following: -50, -25, 0, 25 or 50.
    const xPosition = 25 * (Math.floor( Math.random() * 5 )) - 50
    const yPosition = 25 * (Math.floor( Math.random() * 5 )) - 50

    image.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
  })
})

// Return all images to initial position on mouseleave event
slidesArea.addEventListener("mouseleave", function () {
  images.forEach(image => {
    image.style.transform = "";
  })
})
