















































const optionsDiv = document.getElementById("options");

function showOptions() {
  optionsDiv.classList.toggle("hidden");
}

function changeImage(imageUrl) {
  const mainImage = document.getElementById("main-image");
  mainImage.src = imageUrl;
  optionsDiv.classList.add("hidden");
}

