import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {
  @Input() lastUpdate : string

  @Input() totalItems : number

  @Output() change = new EventEmitter()

  deleteAll() {
    this.change.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
