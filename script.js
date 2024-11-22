document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu');
  const navList = document.getElementById('nav-list');

  menuIcon.addEventListener('click', () => {
      navList.classList.toggle('active');
  });
});
