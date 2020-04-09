import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question
  @Input()
  answer = null
  grading = false
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

  ngOnInit(): void {
  }

}
