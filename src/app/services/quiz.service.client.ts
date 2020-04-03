import {Injectable} from '@angular/core';
@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('https://cs4550-isabelb-node-hw8.herokuapp.com/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://cs4550-isabelb-node-hw8.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())
}
