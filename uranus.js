const uranus = document.getElementById("uranus");
const axialTilt = document.getElementById("axialTilt");
const tiltLabel = document.getElementById("tiltLabel");

function updateTilt() {
    const tilt = Number(axialTilt.value);

    uranus.style.transform = "rotate(" + tilt + "deg)";
    tiltLabel.textContent = "Illustrated tilt: " + tilt + "°";
}

axialTilt.addEventListener("input", updateTilt);
updateTilt();
