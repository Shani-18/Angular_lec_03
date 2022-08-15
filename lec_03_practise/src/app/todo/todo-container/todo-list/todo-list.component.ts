import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todo-item-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() toDosList!: TodoItem[];

  constructor() {}

  ngOnInit(): void {}
  toDoDelete(toDoItem: TodoItem) {
    const deleteToDoIndex = this.toDosList.findIndex(
      (saveToDo) => saveToDo.SNo === toDoItem.SNo
    );
    this.toDosList.splice(deleteToDoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(this.toDosList));
  }
  toggleStatus(toDoItem: TodoItem) {
    const strikeToDoIndex = this.toDosList.findIndex(
      (saveToDo) => saveToDo.SNo === toDoItem.SNo
    );
    this.toDosList[strikeToDoIndex].isActive =
      !this.toDosList[strikeToDoIndex].isActive;
    localStorage.setItem('todos', JSON.stringify(this.toDosList));
  }
}
