// script.js
document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const card = document.getElementById('card');
    const yesBtn = document.getElementById('yesBtn');
    const obviouslyBtn = document.getElementById('obviouslyBtn');
  
    heart.addEventListener('click', () => {
      heart.style.display = 'none'; // Hide the heart
      card.classList.remove('hidden'); // Show the card
      card.style.opacity = '1'; // Fade in the card
    });
  
    yesBtn.addEventListener('click', () => {
      alert('Yay! You made me the happiest person alive! ❤️');
    });
  
    obviouslyBtn.addEventListener('click', () => {
      alert('I knew you’d say that! You’re the best! 😘');
    });
  });