const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
});

const puppyImages = document.getElementById("puppyImages");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

// Scroll left
leftBtn.addEventListener("click", () => {
    puppyImages.scrollBy({
        left: -200,
        behavior: "smooth"
    });
});

// Scroll right
rightBtn.addEventListener("click", () => {
    puppyImages.scrollBy({
        left: 200,
        behavior: "smooth"
    });
});