// Example images you can replace with your own images' URLs or local paths
const imageUrls = [
  '1.jpg', // RJ
  '2.jpeg', // Chimmy
  '3.jpg', // Koya
  '4.jpg', // Tata
  '5.jpg', // Cooky
  '6.jpeg', // Shooky
  '7.jpeg', // Mang
  '8.jpeg', // Van
  '9.jpeg', // Apeach
  '10.jpeg', // Neo
  '11.jpeg', // Neo
  '12.jpeg', // Chimmy
  '13.jpeg', // Koya
  '14.jpeg', // Tata
  '15.jpeg', // Cooky
  '16.jpeg', // Shooky
  '17.jpeg', // Mang
  '18.jpeg', // Van
  '19.jpg', // Apeach
  '20.jpeg', // Neo
  '21.jpeg', // RJ
  '22.jpg'  // Chimmy
];

window.addEventListener('DOMContentLoaded', () => {
  const pictureDivs = document.querySelectorAll('.picture');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const caption = document.getElementById('caption');
  const closeModal = document.querySelector('.modal .close');

  pictureDivs.forEach((div) => {
    div.addEventListener('click', () => {
      const imageUrl = div.style.backgroundImage.slice(5, -2); // Extract URL from background-image
      modal.style.display = 'block';
      modalImage.src = imageUrl;
      caption.textContent = `Image ${div.dataset.order}`;
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
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
  const letterContent = document.getElementById('letterContent'); // Target the letter content

  // Ensure the message content is hidden initially
  letterContent.style.display = 'none';

  let visible = false;
  toggleBtn.addEventListener('click', () => {
    visible = !visible; // Toggle visibility
    letterContent.style.display = visible ? 'block' : 'none';
    toggleBtn.textContent = visible ? 'Hide Message' : 'Show Message';
  });
});