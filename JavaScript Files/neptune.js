const windSpeed = document.getElementById("windSpeed");
const windLabel = document.getElementById("windLabel");
const windBar = document.getElementById("windBar");

windSpeed.addEventListener("input", function() {
    const speed = Number(windSpeed.value);
    const percentage = (speed / 2100) * 100;

    windLabel.textContent = "Wind speed: " + speed + " km/h";
    windBar.style.width = percentage + "%";
});
