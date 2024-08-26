console.log("Cześć! To moje pierwsze kroki... Miło, że tu zaglądasz. Pozdrawiam")

let przycisk = document.querySelector(".article__button");
let naglowek = document.querySelector(".header");
przycisk.addEventListener("click", () => {
    naglowek.remove();
});