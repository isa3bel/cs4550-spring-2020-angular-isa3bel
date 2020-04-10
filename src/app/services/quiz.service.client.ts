import { Injectable } from "@angular/core";
@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch("https://cs4550-isabel-b-hw9-node.herokuapp.com/api/quizzes").then((response) =>
      response.json()
    );
  findQuizById = (qid) =>
    fetch(`https://cs4550-isabel-b-hw9-node.herokuapp.com/api/quizzes/${qid}`).then((response) =>
      response.json()
    );
  findAttemptsForQuiz = (qid) =>
    fetch(
      `https://cs4550-isabel-b-hw9-node.herokuapp.com/api/quizzes/${qid}/attempts`
    ).then((response) => response.json());
}
