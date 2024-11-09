function toggleMenu() {
    const menu = document.querySelector(".menu");
    const isMenuHidden = menu.style.display === "none";
    
    menu.style.display = isMenuHidden ? "block" : "none";
    document.getElementById("icon").style.display = isMenuHidden ? "none" : "block";
    document.getElementById("close").style.display = isMenuHidden ? "block" : "none";
}

["icon", "close"].forEach(id => {
    document.getElementById(id).addEventListener("click", toggleMenu);
});
