const menuToggle = document.getElementById("men-toggle");
const navigation = document.getElementById("navi");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
});



