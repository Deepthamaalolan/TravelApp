[4:13 PM, 4/26/2024] Swathi Muralinathan ❤️: /* Resets browser defaults */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* HTML and body settings to ensure full height */
html, body {
    height: 100%;
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
}

/* Flexbox split screen layout */
.split-screen {
    display: flex;
    height: 100%;
}

/* Panel containing changing background images */
.left-panel {
    flex-basis: 50%;
    background: url('your-default-image.jpg') no-repeat center center/cover; /* Replace with your default image path */
    position: relative; /* For positioning the image credits or overlays */
}

/* Styling for image credits or any text overlays on the left panel */
.left-panel::after {
    content: 'Photo by Photographer'; …
[4:14 PM, 4/26/2024] Swathi Muralinathan ❤️: // Define the array of images for the background of the left panel.
let travelImages = [
    'https://source.unsplash.com/daily?mountains', // Example image, replace with actual URLs
    'https://source.unsplash.com/daily?city',      // Example image, replace with actual URLs
    'https://source.unsplash.com/daily?ocean',     // Example image, replace with actual URLs
    // Add more images as needed
];
let currentImageIndex = 0;

// Function to change the background image of the left panel
function changeBackgroundImage() {
    const leftPanel = document.querySelector('.left-panel');
    // Set the new background image
    leftPanel.style.backgroundImage = url('${travelImages[currentImageIndex]}');
    // Cycle through the travelImages array
    currentImageIndex = (currentImageIndex + 1) % travelImages.length;
}

// Set the interval for changing the background image
setInterval(changeBackgroundImage, 10000); // Change background every 10 seconds

// Initialize the first background image
changeBackgroundImage();

// Form navigation logic
const formSteps = document.querySelectorAll('.form-step');
let currentStep = 0; // Start at the first step

// Function to move to the next form step
function nextStep() {
    if (currentStep < formSteps.length - 1) {
        formSteps[currentStep].classList.remove('active');
        formSteps[currentStep + 1].classList.add('active');
        currentStep++;
    }
}

// Function to move to the previous form step
function prevStep() {
    if (currentStep > 0) {
        formSteps[currentStep].classList.remove('active');
        formSteps[currentStep - 1].classList.add('active');
        curren
