
function myFunction(x) {
  x.classList.toggle("change");
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










// Select all buttons
const buttons = document.querySelectorAll('button');

// Add a click event listener to each button (example)
buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert(`Button ${button.textContent} clicked!`);
  });
});







































const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const content = document.querySelector('.content');
const contentElements = content.children; // Get all children elements

let currentIndex = 0; // Keeps track of the current content element

// Function to show/hide previous and next buttons based on index
function updateButtonVisibility() {
  previousBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === contentElements.length - 1;
}

// Next button click handler
nextBtn.addEventListener('click', () => {
  if (currentIndex < contentElements.length - 1) {
    currentIndex++;
    contentElements[currentIndex].style.display = 'block';
    if (currentIndex > 0) {
      contentElements[currentIndex - 1].style.display = 'none'; // Hide previous element
    }
    updateButtonVisibility();
  }
});

// Previous button click handler (similar logic)
previousBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    contentElements[currentIndex].style.display = 'block';
    contentElements[currentIndex + 1].style.display = 'none'; // Hide next element
    updateButtonVisibility();
  }
});

// Initially hide all content elements except the first one
for (let i = 1; i < contentElements.length; i++) {
  contentElements[i].style.display = 'none';
}

updateButtonVisibility(); // Call initially to set button states
