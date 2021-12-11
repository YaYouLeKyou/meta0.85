const toggleButton = document.getElementById('toggle-btn');
const sideBar = document.getElementById('side-bar');

toggleButton.addEventListener('click', show);

function show() {
  sideBar.classList.toggle('active');
}

// REMOVE SIDEBAR IF CLICK ON THE MAIN CONTENT
const content = document.querySelector('.content');

content.addEventListener('click', () => {
  sideBar.classList.remove('active');
});
