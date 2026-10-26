const saturnButton = document.getElementById("saturnButton");

saturnButton.addEventListener("click", function() {
    const earthWeight = Number(
        document.getElementById("earthWeight").value
    );

    const saturnResult = document.getElementById("saturnResult");

    if (earthWeight <= 0 || !Number.isFinite(earthWeight)) {
        saturnResult.textContent = "Please enter a valid weight!";
        return;
    }

    const saturnWeight = earthWeight * 1.06;

    saturnResult.textContent =
        "You would weigh approximately " +
        saturnWeight.toFixed(1) +
        " pounds on Saturn!";
});
