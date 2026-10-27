const earth = document.getElementById("earth");
const dayNightToggle = document.getElementById("dayNightToggle");
const dayNightStatus = document.getElementById("dayNightStatus");

dayNightToggle.addEventListener("click", function() {
    const isNightSide = earth.classList.toggle("night-side");

    dayNightToggle.setAttribute("aria-pressed", String(isNightSide));
    dayNightToggle.textContent = isNightSide
        ? "Show Earth's day side"
        : "Show Earth's night side";
    dayNightStatus.textContent = isNightSide
        ? "Earth is shown in a simulated night view."
        : "Earth is shown in daylight.";
});
