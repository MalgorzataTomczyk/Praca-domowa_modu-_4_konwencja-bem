function greet() {
    console.log("Cześć! To moje pierwsze kroki... Miło, że tu zaglądasz. Pozdrawiam");
}

function removeHeader(headerElement) {
    headerElement.remove();
}

greet();

const przycisk = document.querySelector(".article__button");
const naglowek = document.querySelector(".header");

przycisk.addEventListener("click", () => {
    removeHeader(naglowek);
});