var movie = {
    name: "Inception",
    age: 2012,
    info: {
        lenght: 148,
        director: "Christopher Nolan"
    }
};
console.log(movie.info.director);
var library = {
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
