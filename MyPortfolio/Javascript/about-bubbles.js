
const bubbles = document.querySelectorAll('.bubble');

document.addEventListener('mousemove', e => {
  bubbles.forEach(bubble => {
    const rect = bubble.getBoundingClientRect();
    const bubbleX = rect.left + rect.width / 2;
    const bubbleY = rect.top + rect.height / 2;

    const diffX = e.clientX - bubbleX;
    const diffY = e.clientY - bubbleY;
    const distance = Math.sqrt(diffX * diffX + diffY * diffY);

    if (distance < 150) { // proximity threshold
      const moveX = diffX * -0.1;
      const moveY = diffY * -0.1;
      bubble.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    } else {
      bubble.style.transform = '';
    }
  });
});

