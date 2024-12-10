// Get elements
const openBoxBtn = document.querySelector('.open-box-btn');
const aboutBox = document.getElementById('aboutBox');
const closeBtn = document.getElementById('closeBox');

// Open the about box
openBoxBtn.addEventListener('click', () => {
  aboutBox.classList.add('active');
});

// Close the about box
closeBtn.addEventListener('click', () => {
  aboutBox.classList.remove('active');
});

// Close the box when clicking outside of it
window.addEventListener('click', (e) => {
  if (e.target === aboutBox) {
    aboutBox.classList.remove('active');
  }
});
