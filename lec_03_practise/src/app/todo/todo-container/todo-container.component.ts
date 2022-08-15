import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../models/todo-item-model';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css'],
})
export class TodoContainerComponent implements OnInit {
  toDosList!: TodoItem[];
  localItem: string | null;
  constructor() {
    this.localItem = localStorage.getItem('todos');
    this.localItem === null
      ? (this.toDosList = [])
      : (this.toDosList = JSON.parse(this.localItem));
  }
  ngOnInit(): void {}
  ListToDosHandler(toDosList: TodoItem[]) {
    this.toDosList = toDosList;
    localStorage.setItem('todos', JSON.stringify(this.toDosList));
  }
  deleteAllTodos(): void {
    this.toDosList.splice(0, this.toDosList.length);
    // this.toDosList = [];
    localStorage.setItem('todos', JSON.stringify(this.toDosList));
  }
}
