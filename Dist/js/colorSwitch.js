document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggleSwitch");
  const textElements = document.querySelectorAll(".toggle-text");
  const expSwitchColorWork = document.querySelector(".sliderWork");
  const expSwitchColorAcademic = document.querySelector(".sliderAcademic");
  const academics = document.querySelector(".academics");
  const works = document.querySelector(".works");

  // Set initial color
  textElements.forEach(el => el.classList.add("green"));

  // Toggle switch handler
  toggleSwitch.addEventListener("change", () => {
    const newClass = toggleSwitch.checked ? "blue" : "green";
    const oldClass = toggleSwitch.checked ? "green" : "blue";
    
    textElements.forEach(el => {
      el.classList.replace(oldClass, newClass);
    });

    updateActiveSlider();
  });

  function updateActiveSlider() {
    const activeSlider = document.querySelector(".active");
    if (!activeSlider) return;

    const color = toggleSwitch.checked ? "blue" : "green";
    activeSlider.classList.remove("blue", "green");
    activeSlider.classList.add(color);
  }

  function switchView(showAcademic) {
    academics.style.display = showAcademic ? "block" : "none";
    works.style.display = showAcademic ? "none" : "block";
    
    expSwitchColorAcademic.classList.toggle("active", showAcademic);
    expSwitchColorWork.classList.toggle("active", !showAcademic);
    
    updateActiveSlider();
  }

  // Initialize view
  switchView(true);

  // Export functions
  window.sliderAcademic = () => switchView(true);
  window.sliderWork = () => switchView(false);
});