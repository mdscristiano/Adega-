const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-navigation");

if (menuToggle && navigation) {
    const closeMenu = () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        navigation.classList.remove("is-open");
        document.body.classList.remove("menu-open");
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
        navigation.classList.toggle("is-open", !isOpen);
        document.body.classList.toggle("menu-open", !isOpen);
    });

    navigation.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });
}

document.querySelectorAll(".whatsapp-link").forEach((link) => {
    const product = link.getAttribute("data-product");
    const customMessage = link.getAttribute("data-message");
    if (!product && !customMessage) return;

    const message = customMessage || `Olá! Tenho interesse em ${product}.`;
    link.setAttribute("href", `https://wa.me/?text=${encodeURIComponent(message)}`);
});

const yearElement = document.querySelector("#current-year");
if (yearElement) yearElement.textContent = String(new Date().getFullYear());