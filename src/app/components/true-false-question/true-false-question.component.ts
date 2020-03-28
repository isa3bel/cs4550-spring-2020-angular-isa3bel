import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-true-false-question",
  templateUrl: "./true-false-question.component.html",
  styleUrls: ["./true-false-question.component.css"]
})
export class TrueFalseQuestionComponent implements OnInit {
  constructor() {console.log(this.grading);}

  @Input()
  question
  answer = "";
  grading = false;
  correct = false;
  grade = () => {
    this.grading = true;
    console.log(this.grading);
    if (this.answer === this.question.correct) {
      this.correct = true;
    }
  };

  
  ngOnInit(): void {}
}
