const books = [
    "2 States",
    "Train to Pakistan",
    "God of Small Things",
    "Midnight's Children",
    "Palace of Illusions",
    "The Guide",
    "Wings of Fire",
    "Wild Tiger"
];

const searchBar = document.getElementById('searchBar');
const resultsDiv = document.getElementById('results');

searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    resultsDiv.innerHTML = '';

    if (query.trim() === '') return; // If empty, show nothing

    const filteredBooks = books.filter(book => book.toLowerCase().includes(query));

    filteredBooks.forEach(book => {
        const div = document.createElement('div');
        div.className = 'book';
        div.textContent = book;
        resultsDiv.appendChild(div);
    });
});

 searchBar = document.getElementById('searchBar');
const books = document.querySelectorAll('#bookList .book');

searchBar.addEventListener('input', function () {
    const searchText = this.value.toLowerCase();

    books.forEach(function (book) {
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







