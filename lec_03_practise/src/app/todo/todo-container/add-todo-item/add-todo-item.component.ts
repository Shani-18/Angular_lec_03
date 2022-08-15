import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from '../../models/todo-item-model';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css'],
})
export class AddTodoItemComponent implements OnInit {
  toDoList: TodoItem[] = [];
  @Output() ListToDos: EventEmitter<TodoItem[]> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  addToDoHandler(todoItem: TodoItem): void {
    todoItem.SNo = this.toDoList.length + 1;
    todoItem.isActive = true;
    this.toDoList.push(todoItem);
    this.ListToDos.emit(this.toDoList);
  }
}
