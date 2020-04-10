import {Injectable} from '@angular/core';
@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://cs4550-isabel-b-hw9-node.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
