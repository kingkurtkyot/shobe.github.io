// Example images you can replace with your own images' URLs or local paths
const imageUrls = [
  'img/1.jpg', // RJ
  'img/2.jpeg', // Chimmy
  'img/3.jpg', // Koya
  'img/4.jpg', // Tata
  'img/5.jpg', // Cooky
  'img/6.jpg', // Shooky
  'img/7.jpeg', // Mang
  'img/8.jpeg', // Van
  'img/9.jpg', // Apeach
  'img/10.jpeg', // Neo
  'img/11.jpeg', // Neo
  'img/12.jpeg', // Chimmy
  'img/13.jpeg', // Koya
  'img/14.jpeg', // Tata
  'img/15.jpeg', // Cooky
  'img/16.jpeg', // Shooky
  'img/17.jpeg', // Mang
  'img/18.jpeg', // Van
  'img/19.jpg', // Apeach
  'img/20.jpeg'  // Chimmy
];
window.addEventListener('DOMContentLoaded', () => {
  const imageUrls = [
    'img/1.jpg', 'img/2.jpeg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg',
    'img/7.jpeg', 'img/8.jpeg', 'img/9.jpg', 'img/10.jpeg', 'img/11.jpeg', 'img/12.jpeg',
    'img/13.jpeg', 'img/14.jpeg', 'img/15.jpeg', 'img/16.jpeg', 'img/17.jpeg', 'img/18.jpeg',
    'img/19.jpg', 'img/20.jpeg', 'img/21.mp4', 'img/22.mp4'
  ];

  const carousel = document.querySelector('.carousel');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  // Populate carousel with images and videos
  imageUrls.forEach((url, idx) => {
    const item = document.createElement(url.endsWith('.mp4') ? 'video' : 'img');
    item.src = url;
    item.classList.add('carousel-item');
    if (url.endsWith('.mp4')) {
      item.controls = true;
      item.loop = true;
    }
    const wrapper = document.createElement('div');
    wrapper.classList.add('carousel-item');
    wrapper.appendChild(item);
    carousel.appendChild(wrapper);
  });

  let currentIndex = 0;

  const updateCarousel = () => {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  };

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    updateCarousel();
  });

  updateCarousel();
});

window.addEventListener('DOMContentLoaded', () => {
  const pictureDivs = document.querySelectorAll('.picture');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const caption = document.getElementById('caption');
  const closeModal = document.querySelector('.modal .close');

  pictureDivs.forEach((div) => {
    div.addEventListener('click', () => {
      if (div.tagName === 'VIDEO') {
        // Handle video modal
        const videoSrc = div.querySelector('source').src;
        modal.style.display = 'block';
        modalImage.style.display = 'none'; // Hide image element
        const videoElement = document.createElement('video');
        videoElement.src = videoSrc;
        videoElement.controls = true;
        videoElement.autoplay = true;
        videoElement.style.maxWidth = '80%';
        videoElement.style.maxHeight = '80%';
        modal.appendChild(videoElement);
        caption.textContent = `Video ${div.dataset.order}`;
      } else {
        // Handle image modal
        const imageUrl = div.style.backgroundImage.slice(5, -2); // Extract URL from background-image
        modal.style.display = 'block';
        modalImage.style.display = 'block'; // Show image element
        modalImage.src = imageUrl;
        caption.textContent = `Image ${div.dataset.order}`;
      }
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    const videoElement = modal.querySelector('video');
    if (videoElement) {
      modal.removeChild(videoElement); // Remove video element from modal
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      const videoElement = modal.querySelector('video');
      if (videoElement) {
        modal.removeChild(videoElement); // Remove video element from modal
      }
    }
  });

  // Scatter effect for pictures
  pictureDivs.forEach((div, idx) => {
    if (div.tagName !== 'VIDEO') {
      div.style.backgroundImage = `url(${imageUrls[idx]})`;
      const maxRotation = 10;
      const rotation = (idx % 2 === 0 ? 1 : -1) * (Math.random() * maxRotation);
      div.style.transform = `rotate(${rotation}deg)`;
    }
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