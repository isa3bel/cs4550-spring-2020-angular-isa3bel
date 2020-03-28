import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (cid) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/courses/${cid}/modules`)
    .then(response => response.json());
  }
}