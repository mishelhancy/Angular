import { Course } from './../Course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

 courses : Course[] =  [ 
    {title: 'Angular', summary: 'Framework from Google!!'},
    {title: 'Java', summary: 'Basic Programming Language from Oracle'},
    {title: 'Spring', summary: 'Framework making Java Easy'},
    {title: 'Git', summary: 'Source Code Management!!'},
    {title: 'MongoDB', summary: 'NoSQL db'}
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
