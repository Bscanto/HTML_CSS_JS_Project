const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  anime({
    targets: card,
    opacity: 1,
    duration: 500,
    easing: 'easeInOutQuad',
  });
});