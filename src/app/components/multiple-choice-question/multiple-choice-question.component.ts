import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question
  answer = ''
  grading = false
  correct
  grade = () => {
    this.grading = true;
    console.log(this.grading);
    if (this.answer === this.question.correct) {
      this.correct = true;
    }
  };

  ngOnInit(): void {
  }

}
