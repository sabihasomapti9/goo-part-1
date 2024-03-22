



























const optionsDiv = document.getElementById("options");

function showOptions() {
  optionsDiv.classList.toggle("hidden");
}

function changeImage(imageUrl) {
  const mainImage = document.getElementById("main-image");
  mainImage.src = imageUrl;
  optionsDiv.classList.add("hidden");
}













































const imageMenu = document.getElementById('image-menu');
const optionsContainer = document.getElementById('options-container');

const options = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6"
];

function showOptions() {
  optionsContainer.innerHTML = ""; // Clear previous options

  const optionsList = document.createElement('ul');
  options.forEach(option => {
    const listItem = document.createElement('li');
    listItem.textContent = option;
    optionsList.appendChild(listItem);
  });

  optionsContainer.appendChild(optionsList);
  const containerPosition = imageMenu.getBoundingClientRect();
  optionsContainer.style.top = containerPosition.bottom + "px";
  optionsContainer.style.left = containerPosition.left + "px";
  optionsContainer.style.display = "block";
}

function hideOptions() {
  optionsContainer.style.display = "none";
}

imageMenu.addEventListener('click', showOptions);

document.addEventListener('click', function(event) {
  if (!event.target.matches('#image-menu')) {
    hideOptions();
  }
});
