// Задача #1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount  = pagesCount;
    this.state = state;
    this.type = type;
    
  }
  fix() {
    this.state *= 1.5;
    if (this.state > 100) {
      this.state = 100;
    }
  }
  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount, 100, "magazine");
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount, 100, "book");
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(name, releaseDate, author) {
    super(name, releaseDate, author);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(name, releaseDate, author) {
    super(name, releaseDate, author);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, author) {
    super(name, releaseDate, author);
    this.type = "detective";
  }
}

// Задача #2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        const book = this.books[i];
        this.books.splice(i, 1);
        return book;
      }
    }
    return null;
  }
}

const library = new Library("Библиотека");
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new Magazine("Буратино", 1948, 98));
library.addBook(new Magazine("Морозко", 1976, 56));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

 console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// Задача #3
class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }

  setSubject(subjectName) {
    this.subject = subjectName;
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }
    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!subject) {
      let average = 0;
      let subjects = 0;
      for (let subject in this.marks) {
        if (this.marks[subject].length === 0) {
          continue;
        }
        let sum = this.marks[subject].reduce((a, b) => a + b, 0);
        average += sum / this.marks[subject].length;
        subjects++;
      }
      if (subjects === 0) {
        return 0;
      }
      return average / subjects;
    }
    if (!this.marks[subject]) {
      return 0;
    }
    let sum = this.marks[subject].reduce((a, b) => a + b, 0);
    return sum / this.marks[subject].length;
  }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(4, "физика");
student.addMark(6, "физика");

console.log(student);
console.log(student);
console.log(student);
console.log(student);
console.log(student);
console.log(student);
console.log(student.getAverageBySubject("физика"));
console.log(student.getAverageBySubject("биология"));
console.log(student.getAverageBySubject());