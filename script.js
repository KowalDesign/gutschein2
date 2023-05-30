const copyButton = document.getElementById("copy-button");
const copyIcon = document.getElementById("copy-icon");

copyButton.addEventListener("click", function (event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Buttons

    const textbox = document.getElementById("textbox");
    const newValue = textbox.value; // Speichert den neuen Wert der Textbox

    textbox.removeAttribute("readonly"); // Entfernt das readonly-Attribut
    textbox.value = newValue; // Setzt den neuen Wert in die Textbox
    textbox.select();
    document.execCommand("copy");
    // textbox.setAttribute("readonly", "readonly"); // Setzt das readonly-Attribut wieder

    copyIcon.src = "pictures/checkbox.png";

    window.open("https://amzn.to/43yL7J4", "_blank");
});
