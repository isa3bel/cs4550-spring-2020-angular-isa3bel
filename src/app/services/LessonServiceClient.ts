import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findLessonsForModule = (mid) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/modules/${mid}/lessons`)
    .then(response => response.json());
  }
}