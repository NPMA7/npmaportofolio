// all about main pages functions

// slider pages
function about() {
  var sec_about = document.getElementById("about");
  var sec_experience = document.getElementById("experience");
  var sec_project = document.getElementById("project");
  var sec_collection = document.getElementById("collection");

  if (sec_about.style.display === "block") {
    sec_experience.style.display = "none";
    sec_project.style.display = "none";
    sec_collection.style.display = "none";
  } else {
    sec_about.style.display = "block";
    sec_experience.style.display = "none";
    sec_project.style.display = "none";
    sec_collection.style.display = "none";
  }
}
function experience() {
  var sec_about = document.getElementById("about");
  var sec_experience = document.getElementById("experience");
  var sec_project = document.getElementById("project");
  var sec_collection = document.getElementById("collection");

  if (sec_experience.style.display === "block") {
    sec_about.style.display = "none";
    sec_project.style.display = "none";
    sec_collection.style.display = "none";
  } else {
    sec_about.style.display = "none";
    sec_experience.style.display = "block";
    sec_project.style.display = "none";
    sec_collection.style.display = "none";
  }
}
function project() {
  var sec_about = document.getElementById("about");
  var sec_experience = document.getElementById("experience");
  var sec_project = document.getElementById("project");
  var sec_collection = document.getElementById("collection");

  if (sec_project.style.display === "block") {
    sec_experience.style.display = "none";
    sec_about.style.display = "none";
    sec_collection.style.display = "none";
  } else {
    sec_about.style.display = "none";
    sec_experience.style.display = "none";
    sec_project.style.display = "block";
    sec_collection.style.display = "none";
  }
}
function collection() {
  var sec_about = document.getElementById("about");
  var sec_experience = document.getElementById("experience");
  var sec_project = document.getElementById("project");
  var sec_collection = document.getElementById("collection");

  if (sec_collection.style.display === "none") {
    sec_about.style.display = "none";
    sec_project.style.display = "block";
    sec_collection.style.display = "none";
  } else {
    sec_about.style.display = "none";
    sec_experience.style.display = "none";
    sec_project.style.display = "none";
    sec_collection.style.display = "block";
  }
}
// end slider pages
