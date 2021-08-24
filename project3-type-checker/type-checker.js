const textInput = document.querySelector("#text-input");
const textOutput = document.querySelector(".text-output");
const initialText = textOutput.value;

const typeSizeRange = document.querySelector("#type-size-range");
const typeSizeCurrentValue = document.querySelector(".type-size-current-value");

const lineHeightRange = document.querySelector("#line-height-range");
const lineHeightCurrentValue = document.querySelector(".line-height-current-value");

const italicCheckbox = document.querySelector("#italic-checkbox");

const typefaceSelect = document.querySelector("#typeface-select");

const fontWeightRange = document.querySelector("#font-weight-range");
const fontWeightCurrentValue = document.querySelector(".font-weight-current-value");

const colorsButtons = document.querySelectorAll(".option #colors button");


textInput.addEventListener("keyup", function () {
  if (this.value) {
    textOutput.value = this.value;
  } else {
    textOutput.value = initialText;
  }
})

textOutput.addEventListener("keyup", function () {
  textInput.value = this.value;
})

typeSizeRange.addEventListener("input", function () {
  textOutput.style.fontSize = this.value + "px";
  typeSizeCurrentValue.innerHTML = this.value + "px";
})

lineHeightRange.addEventListener("input", function () {
  textOutput.style.lineHeight = this.value;
  lineHeightCurrentValue.innerHTML = this.value;
})

italicCheckbox.addEventListener("change", function () {
  if (this.checked) {
    textOutput.style.fontStyle = "italic";
  } else {
    textOutput.style.fontStyle = "normal";
  }
})

typefaceSelect.addEventListener("input", function () {
  textOutput.style.fontFamily = this.value;
})

fontWeightRange.addEventListener("input", function () {
  textOutput.style.fontWeight = this.value;
  fontWeightCurrentValue.innerHTML = this.value;
})

colorsButtons.forEach(element => {
  element.addEventListener("click", function () {
    const elementColors = this.querySelector(".button-colors");
    console.log("Background Color:", elementColors.style.backgroundColor);
    console.log("Color:", elementColors.style.color);

    textOutput.style.backgroundColor = elementColors.style.backgroundColor;
    textOutput.style.color = elementColors.style.color;

    const currentColorsButton = document.querySelector(".option #colors button[aria-current]");
    currentColorsButton.removeAttribute("aria-current");

    this.setAttribute("aria-current", "true");
  })
})
