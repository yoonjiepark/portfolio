var imageIndex = 1;
showImage(imageIndex);

// Next/previous controls
function plusImage(n) {
  showImage((imageIndex += n));
}

// Thumbnail image controls
function currentImage(n) {
  showImage((imageIndex = n));
}

function showImage(n) {
  var i;
  var images = document.getElementsByClassName("images");
  if (n > images.length) {
    imageIndex = 1;
  }
  if (n < 1) {
    imageIndex = images.length;
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  images[imageIndex - 1].style.display = "block";
}
