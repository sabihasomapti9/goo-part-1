















































const optionsDiv = document.getElementById("options");

function showOptions() {
  optionsDiv.classList.toggle("hidden");
}

function changeImage(imageUrl) {
  const mainImage = document.getElementById("main-image");
  mainImage.src = imageUrl;
  optionsDiv.classList.add("hidden");
}

const image = document.getElementById('myImage');
const menu = document.getElementById('menu');

image.addEventListener('click', function() {
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});
