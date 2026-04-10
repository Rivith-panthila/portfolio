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


// experience tab

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active-content");
    }

    
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    
    document.getElementById(tabName).classList.add("active-content");
    evt.currentTarget.classList.add("active");

    
}