import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrls: ['./todo-list-item-ui.component.scss']
})
export class TodoListItemUiComponent implements OnInit {

  @Input() todo: Todo;

  @Output() delete = new EventEmitter<void>();

  @Output() edit = new EventEmitter<void>();

  @Output() toggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }

  onToggle(event: Event) {
    event.preventDefault();
    this.toggle.emit();
  }

}
