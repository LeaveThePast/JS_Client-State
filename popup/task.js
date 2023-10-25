const PopupElement = document.getElementById("subscribe-modal");
const showPopup = localStorage.getItem("showPopup");

document.addEventListener("DOMContentLoaded", () => {
    if (showPopup) {
    } else {
        PopupElement.classList.add("modal_active");
    }
});

PopupElement.querySelector(".modal__close").addEventListener("click", () => {
    PopupElement.classList.remove("modal_active");
    localStorage.setItem("showPopup", "no");
});