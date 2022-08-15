import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { TodoItem } from 'src/app/todo/models/todo-item-model';

@Component({
  selector: 'app-todo-add-form',
  templateUrl: './todo-add-form.component.html',
  styleUrls: ['./todo-add-form.component.css'],
})
export class TodoAddFormComponent implements OnInit {
  @ViewChild('title', { static: false }) title!: ElementRef;
  desc!: string;

  @Output() emitToDoItem: EventEmitter<TodoItem> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onsubmitHandler(): void {
    const todoItem: TodoItem = new TodoItem();
    todoItem.title = (<HTMLInputElement>this.title.nativeElement).value;
    todoItem.description = this.desc;
    this.emitToDoItem.emit(todoItem);
    (<HTMLInputElement>this.title.nativeElement).value = '';
    this.desc = '';
  }
}
