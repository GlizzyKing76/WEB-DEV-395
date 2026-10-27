const sun = document.getElementById("sun");
const flareIntensity = document.getElementById("flareIntensity");
const flareLabel = document.getElementById("flareLabel");

flareIntensity.addEventListener("input", function() {
    const intensity = Number(flareIntensity.value);
    const glow = intensity * 0.6;
    const scale = 1 + intensity / 1000;

    sun.style.setProperty("--flare-glow", glow + "px");
    sun.style.setProperty("--flare-secondary-glow", glow / 2 + "px");
    sun.style.setProperty("--flare-scale", String(scale));
    flareLabel.textContent = "Flare intensity: " + intensity + "%";
});
