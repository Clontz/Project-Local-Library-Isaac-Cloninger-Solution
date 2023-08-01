const getId = (array, id) => array.find((item) => item.id === id);

function findAuthorById(authors, id) {
  return getId(authors, id);
}

function findBookById(books, id) {
  return getId(books, id);
}

function partitionBooksByBorrowedStatus(books) {

  const checkedOutBooks = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false)
  );
  const returnedBooks = books.filter((book) => 
    book.borrows.every((borrow) => borrow.returned === true)
  );
  
  const result = [checkedOutBooks, returnedBooks];
  return result;
}

// Did some research to find a method that would limit the returned array to ten or less account objects, found that the slice() method works best in this scenario.

function getBorrowersForBook(book, accounts) {
  const borrowers = [];
  book.borrows.forEach((borrow) => {
    const account = accounts.find((account) => account.id === borrow.id);
    const finalBorrowerObject = { ...account, returned: borrow.returned };
    borrowers.push(finalBorrowerObject);
  });
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
