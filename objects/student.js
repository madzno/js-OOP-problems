function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(this.name + ' is a ' + this.year + ' year student ');
    },
    listCourses() {
      console.log(this.courses);
    },
    addCourse(course) {
      this.courses.push(course);
    },
    findCourse(courseId) {
      let index = -1;

      this.courses.forEach((course, currentIdx) => {
        if (course.code === courseId) {
          index = currentIdx;
        }
      });

      if (index === undefined) {
        return -1;
      } else {
        return index;
      }
    },
    addNote(courseId, note) {
      let courseIndex = this.findCourse(courseId);
      if (courseIndex === -1) return;

      let course = this.courses[courseIndex];

      if (course.notes) {
        course.notes += '; ' + note;
      } else {
        course.notes = note;
      }
    },
    updateNote(courseId, note) {
      let courseIndex = this.findCourse(courseId);
      if (courseIndex === -1) return;

      let course = this.courses[courseIndex];

      course.notes = note;
    },
    viewNotes() {
      this.courses.forEach(course => {
        if (course.notes) {
          console.log(course.name + ': ' + course.notes)
        }
      });
    },
  }
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.addNote(99);
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
