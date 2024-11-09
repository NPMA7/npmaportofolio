function sliderPage(pageId) {
  const pages = ["about", "skills", "experience", "collections"];
  
  pages.forEach(page => {
    document.getElementById(page).style.display = page === pageId ? "block" : "none";
  });
}

// Event listeners untuk navigasi
["about", "skills", "experience", "collections"].forEach(page => {
  document.getElementById(page + "Navbar").addEventListener("click", () => sliderPage(page));
  document.getElementById(page + "Nav").addEventListener("click", () => sliderPage(page)); 
});
