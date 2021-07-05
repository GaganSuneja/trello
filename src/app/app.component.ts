
import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Status } from 'src/types/interfaces/i-todo';
import { Todo } from 'src/types/models/todo';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HttpHandler } from './http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-project';
  searchText = '';
  searchTerms = new Subject<string>();
  heros$:Observable<any>;
  tasks: Todo[] = [];
  taskList: [{tasks:[]}] = [{tasks:[]}];
  constructor(private _http: HttpHandler){
    
  }
  
  search() {
    this.searchTerms.next(this.searchText);
  }

  addTask() {
    this.tasks.push(new Todo({status:Status.INCOMPLETE,task:this.searchText}));
  }

  searchSubscribe() {
  }

  createNewTaskList(){
    this.taskList.push({tasks:[]})
  }
}
