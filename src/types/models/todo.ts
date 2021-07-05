import { ITodo, Status } from "../interfaces/i-todo";

export class Todo implements ITodo{

    status:Status;
    task:string;

    constructor(todoTask:ITodo){
        for(let key in todoTask) {
            this[key] = todoTask[key];
        }
    }

}