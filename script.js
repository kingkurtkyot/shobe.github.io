// Example images you can replace with your own images' URLs or local paths
const imageUrls = [
  '1.jpg', // RJ
  '2.jpg', // Chimmy
  '3.jpg', // Koya
  '4.jpg', // Tata
  '5.jpg', // Cooky
];

window.addEventListener('DOMContentLoaded', () => {
  // Scatter effect for pictures
  const pictureDivs = document.querySelectorAll('.picture');
  pictureDivs.forEach((div, idx) => {
    div.style.backgroundImage = `url(${imageUrls[idx]})`;
    const maxRotation = 10;
    const rotation = (idx % 2 === 0 ? 1 : -1) * (Math.random() * maxRotation);
    div.style.transform = `rotate(${rotation}deg)`;
  });

  const toggleBtn = document.getElementById('toggleMessageBtn');
  const letterContainer = document.getElementById('letterContainer');

  let visible = true;
  toggleBtn.addEventListener('click', () => {
    visible = !visible;
    letterContainer.style.display = visible ? 'block' : 'none';
    toggleBtn.textContent = visible ? 'Hide Message' : 'Show Message';
  });
});
