const storm = document.getElementById("jupiter_eye");

const stillImage =
    "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/g/grs_animation_1200.jpg?w=1200&h=690&fit=clip&crop=faces%2Cfocalpoint";

const animatedImage =
    "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/09/p/i/a/PIA22178.gif";

storm.addEventListener("click", function() {
    if (storm.dataset.animated === "true") {
        storm.src = stillImage;
        storm.dataset.animated = "false";
    } else {
        storm.src = animatedImage;
        storm.dataset.animated = "true";
    }
});
