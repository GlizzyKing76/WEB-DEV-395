const mercuryButton = document.getElementById("mercuryButton");
const mercuryFact = document.getElementById("mercuryFact");

const mercuryFacts = [
    "Mercury is the smallest planet in our solar system!",
    "Mercury is the closest planet to the Sun.",
    "Mercury has no moons!",
    "Mercury has a huge impact crater called the Caloris Basin.",
    "Despite being closest to the Sun, Mercury is not the hottest planet. Venus is hotter!"
];

let factIndex = 0;

mercuryButton.addEventListener("click", function() {
    mercuryFact.textContent = mercuryFacts[factIndex];

    factIndex++;

    if (factIndex >= mercuryFacts.length) {
        factIndex = 0;
    }
});
