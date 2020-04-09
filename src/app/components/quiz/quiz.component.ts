import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { QuestionServiceClient } from 'src/app/services/question.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: QuestionServiceClient) { }

  questions = []
  quizId = ''

  submitQuiz = () => {
    fetch(`http://localhost:3000/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(result => console.log(result))
   }

   
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId;
      this.service.findQuestionsForQuiz(this.quizId)
      .then(questions => this.questions = questions);  
    })
   
  }

}
