import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { AddTodoItemComponent } from './todo-container/add-todo-item/add-todo-item.component';
import { TodoListComponent } from './todo-container/todo-list/todo-list.component';
import { TodoAddFormComponent } from './todo-container/add-todo-item/todo-add-form/todo-add-form.component';
import { TodoListItemComponent } from './todo-container/todo-list/todo-list-item/todo-list-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoContainerComponent,
    AddTodoItemComponent,
    TodoListComponent,
    TodoAddFormComponent,
    TodoListItemComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [TodoContainerComponent],
})
export class TodoModule {}
