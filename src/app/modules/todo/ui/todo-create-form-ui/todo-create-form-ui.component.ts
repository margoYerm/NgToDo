import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-create-form-ui',
  templateUrl: './todo-create-form-ui.component.html',
  styleUrls: ['./todo-create-form-ui.component.scss']
})
export class TodoCreateFormUiComponent implements OnInit {

  name = '';

  @Output()
  create = new EventEmitter <string> ();

  constructor() { }

  ngOnInit() {}

  onCreate() {
    if (this.name) {
      this.create.emit(this.name);
      this.name = '';
    }    
  }

}
