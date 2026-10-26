const venus = document.getElementById("venus");
let heat = 0;

venus.addEventListener("click", function() {
    heat++;
    if (heat === 1) {
        venus.classList.add("hot");
    } else if (heat === 2) {
        venus.classList.remove("hot");
        venus.classList.add("veryHot");
    } else {
        heat = 0;
        venus.classList.remove("hot", "veryHot");
    }
});
