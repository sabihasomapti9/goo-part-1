
function myFunction(x) {
  x.classList.toggle("change");
}
const uploadImage = document.getElementById('upload-image');
const uploadVideo = document.getElementById('upload-video');
const uploadOptions = document.querySelector('.upload-options');

uploadImage.addEventListener('click', () => {
  uploadVideo.click();
});

uploadVideo.addEventListener('change', () => {
  // Handle video selection (e.g., display filename)
  const filename = uploadVideo.value.split('\\').pop(); // Adjust for different OS paths
  console.log(`Selected video: ${filename}`);
  
  // Optionally show "hidden" class on upload options for visual feedback
  uploadOptions.classList.remove('hidden');
});


