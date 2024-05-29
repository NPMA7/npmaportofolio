// script.js
document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll(".toggle-text");
    const toggleSwitch = document.getElementById("toggleSwitch");

    // Set initial color for all text elements
    textElements.forEach(textElement => {
        textElement.classList.add("green");
    });

    toggleSwitch.addEventListener("change", function() {
        textElements.forEach(textElement => {
            if (toggleSwitch.checked) {
                textElement.classList.remove("green");
                textElement.classList.add("blue");
            } else {
                textElement.classList.remove("blue");
                textElement.classList.add("green");
            }
        });
    });
});
