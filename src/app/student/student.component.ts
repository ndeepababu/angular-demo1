import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from './student.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  @Input() course: string;




  isNewStudentAdded = false;
  


  newStudentName=""
  savedStudentName=""

  students:string[] = [];
  selected = "" 
  
  update(e:any){
    this.selected = e.target.value
    this.isNewStudentAdded=false
  }

  enableNewStudent(){
    this.isNewStudentAdded=true;
  }

  addNewStudent(studentName:string){
    this.studentService.addStudent(studentName,this.course)
    this.students.push(studentName)
    this.isNewStudentAdded=false;
    this.newStudentName=""
    this.students.sort()
    this.savedStudentName = studentName

  }

  cancelAdd()
  {
    this.isNewStudentAdded=false;
    this.newStudentName=""
    


  }


  constructor(
    private studentService: StudentService,
  ) { 

  }

  
  ngOnInit(): void {

    this.studentService.setCourse.subscribe((msg: any) => {
     this.students =  this.studentService.getStudents(msg.courseName)
     this.savedStudentName=""
    })

  }

}
