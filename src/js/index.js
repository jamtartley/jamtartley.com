let allText = document.querySelectorAll("h1");

for (let text of allText) {
    text.innerHTML = text.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
}

for (let letter of document.querySelectorAll(".letter")) {
    const maxOff = 8;
    let top = -maxOff + (Math.random() * maxOff * 2);
    letter.style.top = top + "px";
}
