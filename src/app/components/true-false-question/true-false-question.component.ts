import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-true-false-question",
  templateUrl: "./true-false-question.component.html",
  styleUrls: ["./true-false-question.component.css"]
})
export class TrueFalseQuestionComponent implements OnInit {
  constructor() {console.log(this.grading);}

  @Input()
  question
  @Input()
  answer = null
  grading = false;
  correct
  @Output()
  answerChange = new EventEmitter<string>()
  // submitAnswer = () => {
  //   if (this.answer === null ) {
  //     return;
  //   }
  //   this.answerChange.emit(this.answer)
  // }

  submitAnswer = () => {
    if (this.answer === null ) {
      return;
    }
    this.grading = true;
    console.log(this.grading);
    if (this.answer === this.question.correct) {
      this.correct = true;
    }
    this.answerChange.emit(this.answer)
  };
  // grade = () => {
  //   if (this.answer === null) {
  //     return false;
  //   }
  //   this.grading = true;
  //   console.log(this.grading);
  //   if (this.answer === this.question.correct) {
  //     this.correct = true;
  //   }
  // };

  
  ngOnInit(): void {}
}
