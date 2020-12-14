const form = document.querySelector('form');
const btn = document.querySelector('.btn');
const main = document.querySelector('main');
const table = document.getElementById('table');


function Book(title, author, edition) {
    this.title = title;
    this.author = author;
    this.edition = edition;
};
Book.prototype.addToList = function() {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${this.title}</td>
                    <td>${this.author}</td>
                    <td>${this.edition}</td>`;
    table.appendChild(tr);
};

Book.prototype.showAddedAlert = function() {
    const h6 = document.createElement("h6");
    h6.textContent = "Book added sucesfully";
    h6.classList.add("added");
    main.insertBefore(h6, form);
    setTimeout(() => main.removeChild(h6), 2000);

};
Book.prototype.showErrorAlert = function() {
    const h6 = document.createElement("h6");
    h6.textContent = "Invalid input";
    h6.classList.add("error");
    main.insertBefore(h6, form);
    setTimeout(() => main.removeChild(h6), 2500);
};

Book.prototype.clearInputs = function() {
    document.querySelector(".book-title").value = '';
    document.querySelector(".author").value = '';
    document.querySelector(".edition").value = '';
};


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('.book-title').value;
    const author = document.querySelector('.author').value;
    const edition = document.querySelector('.edition').value;
    const book = new Book(title, author, edition);
    if (title) {
        book.addToList();
        book.clearInputs();
        book.showAddedAlert();

    } else {
        book.showErrorAlert();
    }

});