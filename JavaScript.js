const searchBar = document.getElementById('searchBar');
const bookCards = document.querySelectorAll('.books-container .book');

searchBar.addEventListener('input', function () {
    const searchText = this.value.toLowerCase();

    bookCards.forEach(function (book) {
        const text = book.textContent.toLowerCase();
        if (text.includes(searchText)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
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










