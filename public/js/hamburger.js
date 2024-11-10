function toggleMenu() {
    const iconOpen = document.getElementById("icon");
    const iconClose = document.getElementById("close");
    const menu = document.querySelector(".menu");
  
    if (menu.style.display === "none") {
        menu.style.display = "block";
        iconOpen.style.display = "none";
        iconClose.style.display = "block";
    } else {
        menu.style.display = "none";
        iconOpen.style.display = "block";
        iconClose.style.display = "none";
    }
  }
  
  // Tambahkan event listener untuk ikon open dan close
  document.getElementById("icon").addEventListener("click", toggleMenu);
  document.getElementById("close").addEventListener("click", toggleMenu);  
