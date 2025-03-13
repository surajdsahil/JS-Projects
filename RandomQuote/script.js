const quotes = [
    "Every step forward, no matter how small, brings you closer to your goal.",
    "Success isn’t about speed; it’s about persistence.",
    "Knowledge grows when curiosity leads the way.",
    "Mistakes are just stepping stones on the path to mastery.",
    "The best stories are written by those who dare to live them.",
    "Happiness isn’t found in perfection but in progress.",
    "Your potential is only limited by the doubts you entertain.",
    "Confidence is built, not born—one decision at a time."
];

const quoteBtn = document.getElementById('quoteBtn');
const quoteDisplay = document.getElementById('quoteDisplay');
let lastIndex = -1;

function generateQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);  // Ensure a different quote

    lastIndex = randomIndex;  // Update lastIndex
    quoteDisplay.innerText = quotes[randomIndex];
}

quoteBtn.addEventListener('click', generateQuote);
