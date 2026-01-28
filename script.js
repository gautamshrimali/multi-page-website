document.addEventListener("DOMContentLoaded", function () {

    const title = document.getElementById("mainTitle");
    const text = document.getElementById("mainText");
    const button = document.getElementById("changeBtn");

    if (button) {
        button.addEventListener("click", function () {
            title.textContent = "Text Changed by JavaScript!";
            text.textContent = "This content was updated using DOM manipulation.";
            title.classList.toggle("highlight");
            console.log("Button clicked - DOM updated");
        });
    }

});
