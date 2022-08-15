import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from 'src/app/todo/models/todo-item-model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent implements OnInit {
  @Input() toDoItem!: TodoItem;
  @Input() index!: number;
  @Output() ToDoDelete: EventEmitter<TodoItem> = new EventEmitter();
  @Output() checkedStatus: EventEmitter<TodoItem> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onClick(toDoItem: TodoItem): void {
    this.ToDoDelete.emit(toDoItem);
  }
  checkBoxClickHandler(toDoItem: TodoItem): void {
    this.checkedStatus.emit(toDoItem);
  }
}
