// Get references to DOM elements
const switchButton = document.getElementById("next-button");
const studioMarker = document.getElementById("studio-marker");
const toyCar = document.getElementById("toycar");
const logo = document.getElementById("ir-logo");
const sceneEl = document.querySelector("#ar-scene");

// Wait for AR scene to be ready
sceneEl.addEventListener("arReady", () => {

  // Track visibility state of toy car
  let showToycar = false;

  // Initialize toy car as hidden
  toyCar.setAttribute("visible", showToycar);

  // Show button when marker is detected
  studioMarker.addEventListener("targetFound", () => {
    switchButton.style.display = "block";
  });

  // Hide button when marker is lost
  studioMarker.addEventListener("targetLost", () => {
    switchButton.style.display = "none";
  });

  // Toggle between toy car and logo visibility
  switchButton.addEventListener("click", () => {
    showToycar = !showToycar;
    toyCar.setAttribute("visible", showToycar);
    logo.setAttribute("visible", !showToycar);
  });

});