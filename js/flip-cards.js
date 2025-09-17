// Flip interest cards on click
const cards = document.querySelectorAll('.interest-card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});


