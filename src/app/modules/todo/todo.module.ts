import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer, TODO_REDUCER_NODE } from './store/todo/todo.reducer';
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoPageComponent } from './page/todo-page/todo-page.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import { FormsModule } from '@angular/forms';
import { TodoListUiComponent } from './ui/todo-list-ui/todo-list-ui.component';
import { TodoListItemUiComponent } from './ui/todo-list-item-ui/todo-list-item-ui.component';
import { TodoListItemEditUiComponent } from './ui/todo-list-item-edit-ui/todo-list-item-edit-ui.component';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),  
    FormsModule,  
  ],
  declarations: [
    TodoPageComponent,
    TodoComponent, 
    TodoWidgetComponent, 
    TodoCreateFormUiComponent,  
    TodoListUiComponent,
    TodoListItemUiComponent,
    TodoListItemEditUiComponent,
  ],
  exports: [
    TodoWidgetComponent,
  ],
})
export class TodoModule { }
