import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  listName:string;
  newTask: string;
  displayListName:string;
  tasks:string[] = [];
  selected:any;
  showListInput:boolean=true;
  
  constructor() { }

  ngOnInit() {
  }

  taskListName() {
    this.displayListName = this.listName;
    this.showListInput = false;
  }

  addNewTask() {
    this.tasks.push('');
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));
  }
  
  allowDrop(ev) {
    ev.preventDefault();
  }


  showInput:boolean = true;
  taskName:string=''
  index:number;


  createTask() {
    this.showInput = !this.showInput;
  }
  
  // // editTask(index) {
  // //   this.tasks[index].showTask = !this.tasks[index].showTask;
    
  // }
  drag(ev) {
    ev.dataTransfer.effectAllowed = 'move'
    ev.dataTransfer.setData("text", ev.target.id);
    this.selected =   ev.target;
  }

  dragOver(e) {
    if (this.isBefore(this.selected, e.target)) {
      e.target.parentNode.insertBefore(this.selected, e.target)
    } else {
      e.target.parentNode.insertBefore(this.selected, e.target.nextSibling)
    }
  }

  isBefore(el1, el2) {
    let cur
    if (el2.parentNode === el1.parentNode) {
      for (cur = el1.previousSibling; cur; cur = cur.previousSibling) {
        if (cur === el2) return true
      }
    }
    return false;
  }
  editListName() {
    this.showListInput = !this.showListInput;
  }
}
