function toggleMenu() {
    const iconOpen = document.getElementById("icon");
    const iconClose = document.getElementById("close");
    const menu = document.querySelector(".menu");
  
    const isMenuVisible = menu.style.display === "block";
  
    if (isMenuVisible) {
      iconOpen.style.display = "block";
      iconClose.style.display = "none";
      menu.style.display = "none";
    } else {
      iconOpen.style.display = "none";
      iconClose.style.display = "block";
      menu.style.display = "block";
    }
  }
  
  // Tambahkan event listener untuk ikon open dan close
  document.getElementById("icon").addEventListener("click", toggleMenu);
  document.getElementById("close").addEventListener("click", toggleMenu);
  