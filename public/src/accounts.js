function findAccountById(accounts, id) {
  const foundAccount = accounts.find((account) => account.id === id);
  return foundAccount;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((acc1, acc2) =>
    acc1.name.last.toLowerCase() > acc2.name.last.toLowerCase() ? 1 : -1
  );
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let totalBooksBorrowed = 0;
  books.forEach((book) => {
    const foundBorrow = book.borrows.find((borrow) => 
      borrow.id === account.id);
    if (foundBorrow) totalBooksBorrowed += 1;
  });
  return totalBooksBorrowed;
}

function getBooksPossessedByAccount(account, books, authors) {
  
  const possBooks = books.filter((book) => book.borrows.some((borrow) => 
    borrow.id === account.id && borrow.returned === false));
  
  const possBooksWithAuthor = possBooks.map((book) => {
    const auth = authors.find((author) => author.id === book.authorId);
    book.author = auth;
    return book;
  });
  return possBooksWithAuthor;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
