document.getElementById('searchBar').addEventListener('input', function() {
    console.log('User typed:', this.value);
});
function showDetails(title, author, description, imageSrc) {
  document.getElementById("popupTitle").textContent = title;
  document.getElementById("popupAuthor").textContent = author;
  document.getElementById("popupDescription").textContent = description;
  document.getElementById("popupImage").src = imageSrc;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}




