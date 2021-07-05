
import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Status } from 'src/types/interfaces/i-todo';
import { Todo } from 'src/types/models/todo';
import { TaskListComponent } from './components/task-list/task-list.component';
// import { HttpHandler } from './http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  taskList: [{tasks:[]}] = [{tasks:[]}];
  constructor(){
    
  }
  

  createNewTaskList(){
    this.taskList.push({tasks:[]})
  }
}
