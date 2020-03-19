import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { LessonServiceClient } from '../services/LessonServiceClient';


@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: LessonServiceClient) { }
  lessons = [];
  moduleId = '';
  lessonId = '';
  courseId = '';
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.id;
      this.moduleId = params.mid;
      this.lessonId = params.lid;
    fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/modules/${this.moduleId}/lessons`)
    .then(response => response.json())
    .then(lessons => this.lessons = lessons);
    });
  }

}
