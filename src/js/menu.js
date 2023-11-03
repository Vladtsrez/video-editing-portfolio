const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', function () {
  document.getElementById('mobile-overlay').classList.add('is-open');
});

closeBtn.addEventListener('click', function () {
  document.getElementById('mobile-overlay').classList.remove('is-open');
});
