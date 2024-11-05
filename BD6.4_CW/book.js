let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen' },
  { id: 4, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

let reviews = [{ id: 1, bookId: 1, content: 'Great book!' }];

let getBook = () => {
  return books;
};

let getBookById = (id) => {
  return books.find((book) => book.id === id);
};

const getAllReviews = async () => {
  return reviews;
};

const getReviewById = async (id) => {
  return reviews.find((review) => review.id === id);
};

module.exports = { getBook, getBookById, getAllReviews, getReviewById };
