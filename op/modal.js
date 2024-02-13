// Define variables for modal image and caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get all the images with class "modal-img"
var images = document.getElementsByClassName("modal-img");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the modal
var modal = document.getElementById("myModal");

// Function to handle image click event
function handleImageClick() {
    // Check if modal is not already open
    if (modal.style.display !== "block") {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;

        // Create and append "Krohn" text in the upper right corner of the picture
        var krohnText = document.createElement("div");
        krohnText.textContent = "Krohn";
        krohnText.style.position = "absolute";
        krohnText.style.top = "10px";
        krohnText.style.right = "10px";
        krohnText.style.color = "white"; // Adjust the color as needed
        krohnText.style.fontSize = "16px"; // Adjust the font size as needed
        modalImg.parentNode.insertBefore(krohnText, modalImg.nextSibling);
    }
}

// Add click event listener to each image
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", handleImageClick);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
};

// Function to handle image click event
function handleImageClick() {
    // Check if modal is not already open
    if (modal.style.display !== "block") {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;

        // Apply CSS styles to center the modal image
        modalImg.style.display = "block";
        modalImg.style.margin = "auto";

        // Create and append "Krohn" text in the upper right corner of the picture
        var krohnText = document.createElement("div");
        krohnText.textContent = "Krohn";
        krohnText.style.position = "absolute";
        krohnText.style.top = "10px";
        krohnText.style.right = "10px";
        krohnText.style.color = "white"; // Adjust the color as needed
        krohnText.style.fontSize = "16px"; // Adjust the font size as needed
        modalImg.parentNode.insertBefore(krohnText, modalImg.nextSibling);
    }
}
