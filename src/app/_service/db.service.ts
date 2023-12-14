import { Injectable } from '@angular/core';
import db from '../../assets/db.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  taskList: any[] = db.tasks;
  statusList: any[] = db.states;

  constructor() { }

  getTaskList(): Observable<any[]> {
    return of(this.taskList);
  }

  getTaskDetailByTitle(title: string) {
    let details = this.taskList.filter(item => item['title'].includes(title))
    return details;
  }

  deleteTaskByTitle(title: string) {
    this.taskList = this.taskList.filter(task => task.title !== title)

    console.log(this.taskList)
  }


}