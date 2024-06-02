function sliderPageAbout() {
    const about = document.getElementById("about");
    const skills = document.getElementById("skills");
    const experience = document.getElementById("experience");
  
    const isAboutVisible = about.style.display === "block";
  
    if (isAboutVisible) {
      about.style.display = "block";
    }
    else {
      about.style.display = "block";
      skills.style.display = "none";
      experience.style.display = "none";
    }
  }
  
function sliderPageSkills() {
    const about = document.getElementById("about");
    const skills = document.getElementById("skills");
    const experience = document.getElementById("experience");
    
    const isSkillsVisible = skills.style.display === "block";
  
    if (isSkillsVisible) {
      skills.style.display = "block";
    }
    else {
      about.style.display = "none";
      skills.style.display = "block";
      experience.style.display = "none";
    }
  }
function sliderPageExperience() {
    const about = document.getElementById("about");
    const skills = document.getElementById("skills");
    const experience = document.getElementById("experience");
    
    const isSkillsVisible = experience.style.display === "block";
  
    if (isSkillsVisible) {
      experience.style.display = "block";
    }
    else {
      about.style.display = "none";
      skills.style.display = "none";
      experience.style.display = "block";
    }
  }
  
  // Tambahkan event listener untuk ikon open dan close
  document.getElementById("aboutNavbar").addEventListener("click", sliderPageAbout);
  document.getElementById("aboutNav").addEventListener("click", sliderPageAbout);
  document.getElementById("skillsNavbar").addEventListener("click", sliderPageSkills);
  document.getElementById("skillsNav").addEventListener("click", sliderPageSkills);
  document.getElementById("experienceNavbar").addEventListener("click", sliderPageExperience);
  document.getElementById("experienceNav").addEventListener("click", sliderPageExperience);
