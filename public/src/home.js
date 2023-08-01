function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let accumulator = 0;
  
  books.reduce((acc, book) => {
    const isReturned = book.borrows[0].returned;
    if (isReturned === false) accumulator++;
  },0);
  
  return accumulator;
}

function getMostCommonGenres(books) {
 const genre = books.map((book) => book.genre);
  const genreArray = [];
  const count = {};
  genre.forEach(function (index) {
    count[index] = (count[index] || 0) + 1;
  });
  for (let key in count) {
    genreArray.push({
      name: key,
      count: count[key],
    });
  }
  genreArray.sort((genreA, genreB) => (genreA.count < genreB.count ? 1 : -1));
  return genreArray.slice(0, 5);
}

function getMostPopularBooks(books) {
  return books.map(book => {
      return {
        name: book.title,
        count: book.borrows.length
      }
    })
    .sort((bookA, bookB) => bookB.count - bookA.count)
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
 authors.forEach((author) => {
  let auth = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    auth.count += book.borrows.length;
   }
  });
  result.push(auth);
 });
 return result.sort((authA, authB) => authB.count - authA.count)
   .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
