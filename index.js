function fetchBooks() {
return fetch('https://anapioficeandfire.com/api/books')
  .then(function(response) {
  return response.json();
}).then(function(json) {
  renderBooks(json);
});
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}
let a=fetchBooks();
document.addEventListener('DOMContentLoaded', function() {
 fetchBooks();
 
})
