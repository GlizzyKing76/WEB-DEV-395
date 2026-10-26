const moon = document.getElementById("moon");

const moonPhases = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/New_Moon.jpg/1280px-New_Moon.jpg",
    "https://th.bing.com/th/id/R.b07c214d99e47b2e74d13553e6ca236e?rik=LGwl%2fQv0sJFihg&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.4d3eb12bd770bb69de81a284868ca54c?rik=VpOmWTugvc%2bTaA&riu=http%3a%2f%2fd1jqu7g1y74ds1.cloudfront.net%2fwp-content%2fuploads%2f2010%2f06%2fFlying-Across-the-Moon1.jpg&ehk=9kNSVu1VEaPESqG27jnlGmYEm0VdvCSkRqyithFiLPc%3d&risl=&pid=ImgRaw&r=0",
    "https://spaceandtelescope.com/wp-content/uploads/2023/03/Waxing-gibbous-moon.jpg",
    "https://imageio.forbes.com/specials-images/imageserve/649c36f19989cde982e45cbe/0x0.jpg?format=jpg&width=1200",
    "https://th.bing.com/th/id/R.24cf9deecd0b96e3590ec0d6362e8c2e?rik=HKfKU9VLyxzsUg&riu=http%3a%2f%2fastronomy.robpettengill.org%2fphotos%2fslides%2fMoon2820WanGib140816.jpg&ehk=s%2bzLS85MuRHI%2fDxQw0%2fsLfs4kM2%2b6ioydyHl6pwfY34%3d&risl=&pid=ImgRaw&r=0",
    "https://images.fineartamerica.com/images-medium-large-5/third-quarter-moon-nasas-scientific-visualization-studioscience-photo-library.jpg",
    "https://images.fineartamerica.com/images-medium-large-5/the-23-day-old-waning-crescent-moon-alan-dyer.jpg"
];

let currentPhase = 5;

moon.addEventListener("click", function() {
    currentPhase++;
    if (currentPhase >= moonPhases.length) {
        currentPhase = 0;
    }
    moon.src = moonPhases[currentPhase];
});
