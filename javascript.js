// aniimathion text home eke

const words = ["Software Engineer", "UI/UX Designer", "Web Developer"];
let i = 0;
let j = 0;
let isDeleting = false;
let speed = 100;

function typeEffect() {
    const currentWord = words[i];
    const currentText = currentWord.substring(0, j);
    document.getElementById("type").textContent = currentText;

    if (!isDeleting && j < currentWord.length) {
        j++;
        setTimeout(typeEffect, speed);
    } else if (isDeleting && j > 0) {
        j--;
        setTimeout(typeEffect, speed / 2);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            i = (i + 1) % words.length;
        }
        setTimeout(typeEffect, 800);
    }
}

typeEffect();