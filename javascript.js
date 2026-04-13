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


// project card
// --- Projects Slider Logic ---

let currentIndex = 0; 
const cards = document.querySelectorAll('.project-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function updateSlider() {
    cards.forEach((card, index) => {
       
        card.classList.remove('active', 'prev-card', 'next-card');
        
       
        card.style.display = "none";

        
        if (index === currentIndex) {
            card.style.display = "block";
            card.classList.add('active');
        } 
        
        else if (index === (currentIndex - 1 + cards.length) % cards.length) {
            card.style.display = "block";
            card.classList.add('prev-card');
        } 
       
        else if (index === (currentIndex + 1) % cards.length) {
            card.style.display = "block";
            card.classList.add('next-card');
        }
    });
}


nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSlider();
});


prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateSlider();
});


updateSlider();


// gallery

let galleryIndex = 0;
const galleryCards = document.querySelectorAll('.gallery-card');
const dotsContainer = document.getElementById('galleryDots');


if (dotsContainer) {
    galleryCards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        
       
        dot.addEventListener('click', () => {
            galleryIndex = index;
            updateGallery();
            resetInterval(); 
        });
        dotsContainer.appendChild(dot);
    });
}

function updateGallery() {
    const dots = document.querySelectorAll('.dot');
    
    galleryCards.forEach((card, index) => {
       
        card.classList.remove('active', 'prev-card', 'next-card');
        card.style.display = "none";
        
        if (dots[index]) dots[index].classList.remove('active');

       
        if (index === galleryIndex) {
            card.style.display = "block";
            card.classList.add('active');
            if (dots[index]) dots[index].classList.add('active');
        } 
        
        else if (index === (galleryIndex - 1 + galleryCards.length) % galleryCards.length) {
            card.style.display = "block";
            card.classList.add('prev-card');
        } 
        
        else if (index === (galleryIndex + 1) % galleryCards.length) {
            card.style.display = "block";
            card.classList.add('next-card');
        }
    });
}

// --- Auto Play Logic ---
let slideInterval = setInterval(() => {
    galleryIndex = (galleryIndex + 1) % galleryCards.length;
    updateGallery();
}, 3000); 

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        galleryIndex = (galleryIndex + 1) % galleryCards.length;
        updateGallery();
    }, 3000);
}


updateGallery();







const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list'); // nav-links වෙනුවට nav-list ගන්න

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

// Menu එකේ link එකක් click කළාම menu එක auto-close වෙන්න
document.querySelectorAll('.nav-list li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    });
});