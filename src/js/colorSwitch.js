document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById("toggleSwitch");
    const textElements = document.querySelectorAll(".toggle-text");
    const expSwitchColorWork = document.querySelector(".sliderWork");
    const expSwitchColorAcademic = document.querySelector(".sliderAcademic");
  
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
  
     updateButtonColors();
    });
  
    function sliderAcademic() {
      const academics = document.querySelector(".academics");
      const works = document.querySelector(".works");
  
      academics.style.display = "block";
      works.style.display = "none";
  
      expSwitchColorAcademic.classList.add("active");
      expSwitchColorWork.classList.remove("active");
  
      updateButtonColors();
    }
  
    function sliderWork() {
      const academics = document.querySelector(".academics");
      const works = document.querySelector(".works");
  
      academics.style.display = "none";
      works.style.display = "block";
  
      expSwitchColorWork.classList.add("active");
      expSwitchColorAcademic.classList.remove("active");
  
      updateButtonColors();
    }
  
    function updateButtonColors() {
      if (toggleSwitch.checked) {
         if (expSwitchColorAcademic.classList.contains("active")) {
          expSwitchColorAcademic.classList.add("blue");
          expSwitchColorAcademic.classList.remove("green");
        }
        if (expSwitchColorWork.classList.contains("active")) {
          expSwitchColorWork.classList.add("blue");
          expSwitchColorWork.classList.remove("green");
        }
      } else {
        if (expSwitchColorAcademic.classList.contains("active")) {
          expSwitchColorAcademic.classList.add("green");
          expSwitchColorAcademic.classList.remove("blue");
        }
        if (expSwitchColorWork.classList.contains("active")) {
          expSwitchColorWork.classList.add("green");
          expSwitchColorWork.classList.remove("blue");
        }
      }
    }
  
    sliderAcademic();
    
    window.sliderAcademic = sliderAcademic;
    window.sliderWork = sliderWork;
  });
  