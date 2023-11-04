const scroll = document.querySelector('.scroll-top');

window.addEventListener('scroll', function () {
  scroll.classList.toggle('active', this.window.scrollY > 100);
});

scroll.addEventListener('click', function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
