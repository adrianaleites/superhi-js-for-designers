// store the current slide number
let currentSlideNumber = 0;

// hold the content of the slides
const slides = [
  {
    text: "a Brooklyn-based graphic designer",
    backgroundColor: "#edc7a9",
    circleColor: "#3e78ed"
  },
  {
    text: "Kanye West's biggest fan",
    backgroundColor: "#a1fffe",
    circleColor: "#e34a47"
  },
  {
    text: "looking for a job at the start of October",
    backgroundColor: "#d3c7f3",
    circleColor: "#f7fe00"
  },
  {
    text: `letting you <a href="pdf.pdf">download her PDF</a>`,
    backgroundColor: "#faffb8",
    circleColor: "#b472e6"
  },
];

// pick the relevant tags
const nextButton = document.querySelector("footer button .next");
const prevButton = document.querySelector("footer button .prev");
const randomButton = document.querySelector("footer button .random");
const heading = document.querySelector("section h2");
const circle = document.querySelector("section .circle");
const body = document.querySelector("body");

// update the h2 text, the circle color and the body background color
const updateSection = function () {
  heading.innerHTML = slides[currentSlideNumber].text;
  circle.style.backgroundColor = slides[currentSlideNumber].circleColor;
  body.style.backgroundColor = slides[currentSlideNumber].backgroundColor;
}

// increase slide number and run function updateHeading
const goNextSlide = function () {
  currentSlideNumber = currentSlideNumber + 1;

  if (currentSlideNumber > slides.length - 1) {
    currentSlideNumber = 0;
  }

  updateSection();
}

// decrease slide number and run updateHeading()
const goPrevSlide = function () {
  currentSlideNumber = currentSlideNumber - 1;

  if (currentSlideNumber < 0) {
    currentSlideNumber = slides.length - 1;
  }

  updateSection();
}

// pick a random slide number
const goRandomSlide = function () {
  currentSlideNumber = Math.floor( Math.random() * slides.length );

  updateSection();
}

// on click of nextButton, run goNextSlide()
nextButton.addEventListener("click", function () {
  goNextSlide();
})

// on click of nextButton, run goPrevSlide()
prevButton.addEventListener("click", function () {
  goPrevSlide();
})

// on click of randomButton, run goRandomSlide()
randomButton.addEventListener("click", function () {
  goRandomSlide();
})

// when user press arrow right, run goNextSlide()
// and when user press arrow left, run goPrevSlide()
document.addEventListener("keyup", function (event) {
  if (event.key === "ArrowRight") {
    goNextSlide();
  }

  if (event.key === "ArrowLeft") {
    goPrevSlide();
  }
})
