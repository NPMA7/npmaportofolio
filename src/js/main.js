function sliderPageAbout() {
    const about = document.getElementById("about");
    const skills = document.getElementById("skills");
  
    const isAboutVisible = about.style.display === "block";
  
    if (isAboutVisible) {
      about.style.display = "block";
    }
    else {
      about.style.display = "block";
      skills.style.display = "none";
    }
  }
  
function sliderPageSkills() {
    const about = document.getElementById("about");
    const skills = document.getElementById("skills");
  
    
    const isSkillsVisible = skills.style.display === "block";
  
    if (isSkillsVisible) {
      skills.style.display = "block";
    }
    else {
      about.style.display = "none";
      skills.style.display = "block";
    }
  }
  
  // Tambahkan event listener untuk ikon open dan close
  document.getElementById("aboutNavbar").addEventListener("click", sliderPageAbout);
  document.getElementById("aboutNav").addEventListener("click", sliderPageAbout);
  document.getElementById("skillsNavbar").addEventListener("click", sliderPageSkills);
  document.getElementById("skillsNav").addEventListener("click", sliderPageSkills);
