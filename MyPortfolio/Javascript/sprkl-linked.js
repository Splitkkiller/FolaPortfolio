
document.querySelectorAll('.ldi-link').forEach(link => {
  link.addEventListener('mouseenter', (e) => {
    for (let i = 0; i < 12; i++) { // number of sparkles
      const sparkle = document.createElement('span');
      sparkle.classList.add('sparkle');
      
      // Random position around the link
      const x = Math.random() * link.offsetWidth;
      const y = Math.random() * link.offsetHeight;
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      
      link.appendChild(sparkle);
      
      // Remove sparkle after animation
      setTimeout(() => sparkle.remove(), 800);
    }
  });
});

