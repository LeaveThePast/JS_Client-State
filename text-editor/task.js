const editorElement = document.getElementById("editor");
const editorText = localStorage.getItem("editorText");

editorElement.addEventListener("input", () => {
    localStorage.setItem("editorText", editorElement.textContent);
});

document.addEventListener("DOMContentLoaded", () => {
    if (editorText) {
        editorElement.textContent = editorText;
    }
});
