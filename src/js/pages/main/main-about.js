function hamburger(){
  var icon = document.querySelector(".icon");
  var close = document.querySelector(".close");
  var menu = document.querySelector(".menu");
  var teks = document.querySelector(".animasi-teks1");
  var line = document.querySelector(".line1");
  var profile = document.querySelector(".profile-header1");

  if (icon.style.display === "block") {
    close.style.display = "none";
    menu.style.display = "none";
    teks.style.display = "block";
    line.style.display = "block";
    profile.style.display = "block";

  }
  if (close.style.display === "block") {
    icon.style.display = "none"
    menu.style.display = "block";
    teks.style.display = "none";
    line.style.display = "none";
    
    profile.style.display = "none";
}
  else {
    close.style.display = "block";
    icon.style.display = "none";
    menu.style.display = "block";
    teks.style.display = "none";
    line.style.display = "none";

    profile.style.display = "none";
  }

}
function hamburgerclose(){
  var icon = document.querySelector(".icon");
  var close = document.querySelector(".close");
  var menu = document.querySelector(".menu");
  var teks = document.querySelector(".animasi-teks1");
  var line = document.querySelector(".line1");
  
  var profile = document.querySelector(".profile-header1");
 
  if (close.style.display === "block") {
   icon.style.display = "none";
   menu.style.display = "block";
   teks.style.display = "none";
   line.style.display = "none"; 
   profile.style.display = "none";
  }
  if (icon.style.display === "block") {
   close.style.display = "none"
   menu.style.display = "none";
   teks.style.display = "block";
   line.style.display = "block";
   profile.style.display = "block";

}
  else {
   icon.style.display = "block";
   close.style.display = "none";
   menu.style.display = "none";
   teks.style.display = "block";
   line.style.display = "block";
   profile.style.display = "block";

  }

}