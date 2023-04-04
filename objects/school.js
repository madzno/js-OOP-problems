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

const school = {
  students: [],
  addStudent(name, year) {
    const validYears = ['1st', '2nd', '3rd', '4th', '5th'];

    if (!validYears.includes(year)) {
      console.log('Invalid Year');
    }

    let student = createStudent(name, year);

    this.students.push(student);

    return student;
  },
  getIndexOfStudent(name) {
    let index = -1;

    this.students.forEach((student, currentIdx) => {
      if (student.name === name) {
        index = currentIdx;
      }
    });

    return index;
  },
  enrollStudent(student, course) {
    let index = this.getIndexOfStudent(student.name);

    if (index === -1) {
      return;
    }

    student.addCourse(course);
  },
  addGrade(student, courseId, gradeValue) {
    student.courses.forEach(course => {
      if (course.code === courseId) {
        course.grade = gradeValue;
      }
    });
  },
  getReportCard(student) {
    let courses = student.courses;
    courses.forEach(course => {
      if (course.grade) {
        console.log(course.name + ': ' + course.grade);
      } else {
        console.log(course.name + ': In progress')
      }
    });
  },
  getGradeAverage(subject) {
    let allGrades = [];

    this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.name === subject && course.grade) {
          allGrades.push(course.grade);
        }
      });
    });

    if (allGrades.length === 0) return 0;

    return allGrades.reduce((sum, currentGrade) => sum + currentGrade) /
      allGrades.length;
  },
  courseReport(subject) {
    let courseAverage = this.getGradeAverage(subject);

    if (courseAverage === 0) return;

    console.log('=' + subject + ' Grades=');

    this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.name === subject && course.grade) {
          console.log(student.name + ': ' + course.grade)
        }
      });
    });

    console.log('---')
    console.log('Course Average: ' + courseAverage);
  },
}

let foo = school.addStudent('foo', '3rd');
let bar = school.addStudent('bar', '1st');
let qux = school.addStudent('qux', '2nd');

school.enrollStudent(foo, { name: 'Math', code: 101 });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102 });
school.enrollStudent(foo, { name: 'Physics', code: 202 });

school.enrollStudent(bar, { name: 'Math', code: 101 });

school.enrollStudent(qux, { name: 'Math', code: 101 });
school.enrollStudent(qux, { name: 'Advanced Math', code: 102 });

school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);

school.addGrade(bar, 101, 91);

school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

school.courseReport('Physics');

