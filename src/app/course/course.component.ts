import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student/student.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  isNewCourseAdded = false;
  savedCourseName = ""
  


  newCourseName=""

  courses:string[] = [];
  selected = "" 
  
  update(e:any){
    this.selected = e.target.value
    this.isNewCourseAdded=false
    this.studentService.setCourse.next({ courseName: this.selected });
    this.savedCourseName=""
  }

  enableNewCourse(){
    this.isNewCourseAdded=true;
  }

  addNewCourse(courseName:string){

    
    this.courses.push(courseName)
    this.savedCourseName = courseName
    this.isNewCourseAdded=false;
    
    this.newCourseName=""
    this.courses.sort()

    if(this.courses.length ==1)
    {
      this.selected = courseName;
    }
  }

  cancelAdd()
  {
    this.isNewCourseAdded=false;
    this.newCourseName=""
    


  }

  constructor(
    private studentService: StudentService,
  ) {}

  ngOnInit(): void {
  }

  
}


