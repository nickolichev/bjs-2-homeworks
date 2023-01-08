function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
      }

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if (!Array.isArray(this.marks)) {
      this.marks = [];
    }
    this.marks.push(mark);
  };
  
  Student.prototype.addMarks = function (...marks) {
    if (this.excluded) {
        return;
    }
    if (!Array.isArray(this.marks)) {
      this.marks = [];
    }
    this.marks.push(...marks);
  };

  Student.prototype.getAverage = function () {
    if (this.excluded) {
        return 0;
    }
    if (this.marks.length === 0) {
        return 0;
      }
    
      let sum = 0;
      for (let mark of this.marks) {
        sum += mark;
      }
      return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
