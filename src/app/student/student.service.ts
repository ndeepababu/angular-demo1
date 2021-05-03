import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  setCourse = new Subject<{}>();
  students: Student[] = [];



  constructor() { }

  addStudent(studentName: string, courseName: string) {

    let filtered = this.students.filter(student => student.studentName == studentName)
    if (filtered.length > 0) {

      alert("This Student already enrolled in one of the course! Student can be entrolled only one at a time")

    }
    else {

      let student: Student = {
        studentName: studentName,
        courseName: courseName
      }
      this.students.push(student)
      console.log(this.students)
    }

  }

  getStudents(courseName: string) {
    let filtered = this.students.filter(student => student.courseName == courseName)
    console.log(filtered)

    let filteredCourseOnlyArray: string[] = []

    filtered.forEach(function (value) {
      filteredCourseOnlyArray.push(value.studentName)
    });

    return filteredCourseOnlyArray

  }
}

class Student {
  studentName: string;
  courseName: string;

  constructor(studentName: string, courseName: string) {
    this.studentName = studentName;
    this.courseName = courseName;
  }
}
