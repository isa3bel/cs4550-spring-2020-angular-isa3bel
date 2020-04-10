import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QuestionServiceClient } from "src/app/services/question.service.client";
import { QuizServiceClient } from "src/app/services/quiz.service.client";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"],
})
export class QuizComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: QuestionServiceClient,
    private service2: QuizServiceClient
  ) {}

  questions = [];
  quizId = "";
  attempt;
  prevAttempts: Int32Array[] = [];

  submitQuiz = () => {
    fetch(`https://cs4550-isabel-b-hw9-node.herokuapp.com/api/quizzes/${this.quizId}/attempts`, {
      method: "POST",
      body: JSON.stringify(this.questions),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        this.attempt = result["score"];
      });
      this.getAllAttempts()
  };

  getAllAttempts = () => {
    this.prevAttempts = [];
    return this.service2.findAttemptsForQuiz(this.quizId).then((response) => {
      
      for (var i = 0; i < response.length; i++) {
        this.prevAttempts.push(response[i].score);
      }
    });
    
  };

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.quizId = params.quizId;
      this.service
        .findQuestionsForQuiz(this.quizId)
        .then((questions) => (this.questions = questions));
    });
    this.getAllAttempts()
  }
}
