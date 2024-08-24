const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

//map
const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
//console.log(x);

const titles = books.map((e) => e.title);
titles;

const ess = books.map((e) => {
  return {
    title: e.title,
    author: e.author,
  };
});
ess;
//instead of {} ,return,if we use () it aslso retuens

function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads.reviewsCount;
  // const librarything=book.reviews.librarything.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  //? here will ensure that the previous is definied or else it won't move
  //?? is suppose lets assume thta the previous is noy defined then in that case it will provvide NaN ,instead we go for 0 specifing that in the comand.

  return goodread + librarything;
}
//console.log(getTotalReviewCount(book));
const ess1 = books.map((e) => ({
  title: e.title,
  author: e.author,
  reviewscount: getTotalReviewCount(e),
}));
//console.log(ess1);

const longbook = books.filter((e) => e.pages > 600).filter;
//console.log(longbook);

const kk = books
  .filter((e) => e.pages > 500)
  .filter((e) => e.hasMovieAdaptation == true);
//console.log(kk);

//how to combine filter in the map
const adventureBooks = books
  .filter((e) => e.genres.includes("adventure"))
  .map((e) => e.title);
//console.log(adventureBooks);
// this only dislays the title that matches to the respective filter of adventure

//The Array reduce method!!!!!
// Array
const pgall = books.reduce((ac, e) => ac + e.pages, 0);
console.log(pgall);
//acc--current val  and reduce is making the array down into simplier form
//0 is the starting intialization
//its like current is assumed to be 0
//it like iterates till the final stage
//acc----accumulator--like variable
