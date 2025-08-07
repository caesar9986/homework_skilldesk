type info = {
    lenght: number,
    director: string
}

type Movie = {
    name: string,
    age: number,
    info: info,
}

const movie: Movie = {
    name: "Inception",
    age: 2012,
    info: {
        lenght: 148,
        director: "Christopher Nolan"
    }
};

console.log(movie.info.director);

type address = {
    street: string,
    number: string | number,
    city: string,
    isOpen: boolean,
}

type author = {
    firstName: string,
    lastName: string,
}

type books = {
    title: string,
    author: author,
    year: number,
    genres?: string[],
    available: boolean,
}

type Library = {
  name: string,
  address: address,
  books: books[],
  staffCount: number,
  isPublic: boolean,
  openingHours: ("Monday"| "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday")[],
}

const library: Library = {
  name: "Central Library",
  address: {
    street: "Main St",
    number: 42, // Может содержать не только цифры вроде "42/A"
    city: "Metropolis",
    isOpen: true,
  },
  books: [
    {
      title: "TypeScript Basics",
      author: {
        firstName: "John",
        lastName: "Doe",
      },
      year: 2021,
      genres: ["Programming", "Technology"],
      available: true,
    },
    {
      title: "Advanced JavaScript",
      author: {
        firstName: "Jane",
        lastName: "Smith",
      },
      year: 2019,
      available: false,
    },
  ],
  staffCount: 12,
  isPublic: true,
  openingHours: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], // Могут быть только дни недели, но в любом количестве
};