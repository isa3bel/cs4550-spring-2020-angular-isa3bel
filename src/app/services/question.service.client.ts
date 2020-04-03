import {Injectable} from '@angular/core';
@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://cs4550-isabelb-node-hw8.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
