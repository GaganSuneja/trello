import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  showInput:boolean = true;
  taskName:string=''
  @Input() index:number;
  constructor() { }

  ngOnInit() {
    this.taskName = `Task ${this.index}`
  }

  createTask() {
    this.showInput = !this.showInput;
  }
  
  editTask() {
    this.showInput = !this.showInput;
  }
  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

}
