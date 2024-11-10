function sliderPageAbout() {
    const about = document.getElementById("about");
    const skills = document.getElementById("skills");
    const experience = document.getElementById("experience");
    const collections = document.getElementById("collections");
  
      about.style.display = "block";
      skills.style.display = "none";
      experience.style.display = "none";
      collections.style.display = "none";
  
  }
  
function sliderPageSkills() {
    const about = document.getElementById("about");
    const skills = document.getElementById("skills");
    const experience = document.getElementById("experience");
    const collections = document.getElementById("collections");
    

      skills.style.display = "block";
      about.style.display = "none";
      experience.style.display = "none";
      collections.style.display = "none";
 
  }
function sliderPageExperience() {
    const about = document.getElementById("about");
    const skills = document.getElementById("skills");
    const experience = document.getElementById("experience");
    const collections = document.getElementById("collections");

      experience.style.display = "block";
      about.style.display = "none";
      skills.style.display = "none";
      collections.style.display = "none";
    
  }
  function sliderPageCollections() {
    const about = document.getElementById("about");
    const skills = document.getElementById("skills");
    const experience = document.getElementById("experience");
    const collections = document.getElementById("collections");

      collections.style.display = "block";
      about.style.display = "none";
      skills.style.display = "none";
      experience.style.display = "none";

  }
  
  // Tambahkan event listener untuk ikon open dan close
  document.getElementById("aboutNavbar").addEventListener("click", sliderPageAbout);
  document.getElementById("aboutNav").addEventListener("click", sliderPageAbout);
  document.getElementById("skillsNavbar").addEventListener("click", sliderPageSkills);
  document.getElementById("skillsNav").addEventListener("click", sliderPageSkills);
  document.getElementById("experienceNavbar").addEventListener("click", sliderPageExperience);
  document.getElementById("experienceNav").addEventListener("click", sliderPageExperience);
  document.getElementById("collectionsNavbar").addEventListener("click", sliderPageCollections);
  document.getElementById("collectionsNav").addEventListener("click", sliderPageCollections);
