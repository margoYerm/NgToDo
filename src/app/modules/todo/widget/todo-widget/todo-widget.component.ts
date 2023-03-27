import { Component, OnInit } from '@angular/core';
import { eTarget, TodoCreateAction, TodoDeleteAction, TodoEditAction, TodoToggleAction } from '../../store/todo/todo.actions';
import { TodoState } from '../../store/todo/todo.reducer';
import { select, Store } from '@ngrx/store';
import { todoListSelector } from '../../store/todo/todo.selectors';
import { Observable } from 'rxjs';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})

export class TodoWidgetComponent implements OnInit {
 
  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(private store$: Store<TodoState>) { }

  ngOnInit() {
    //this.todoSyncStorage.init();
  }

  onCreate(name: string) {
    console.log(name);
    this.store$.dispatch(new TodoCreateAction({ name }));
  }

  onToggle(id: number) {
    this.store$.dispatch(new TodoToggleAction({ id }));
  }

  onDelete(id: number) {
    this.store$.dispatch(new TodoDeleteAction({ id }));
  }

  onEdit( {id, name}: eTarget ) {
    this.store$.dispatch(new TodoEditAction({ id, name }));
  }
}
