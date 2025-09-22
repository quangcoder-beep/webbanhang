solve = function(value)
{
    // Lấy element
    const menu = document.querySelector(".menu");
    const menuOverlay = document.querySelector(".menu-overlay");
    const menuBtn = document.querySelector(".button .btn");
    const closeBtn = document.querySelector(".menu-close");

    // Mở menu
    menuBtn.addEventListener("click", () => {
        menu.classList.add("active");
        menuOverlay.classList.add("show");
    });

    // Đóng menu
    closeBtn.addEventListener("click", () => {
        menu.classList.remove("active");
        menuOverlay.classList.remove("show");
    });

    // Click ra ngoài để đóng
    menuOverlay.addEventListener("click", () => {
        menu.classList.remove("active");
        menuOverlay.classList.remove("show");
    });
}