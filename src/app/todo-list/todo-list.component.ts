import { getLocaleTimeFormat } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { title } from 'process';
import { Timestamp } from 'rxjs-compat';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos : any[]

  @Output() change = new EventEmitter()

  addTodo(todo: HTMLInputElement) {
    if(todo.value !='') {
      let aTodo = {
        id: this.todos.length + 1,
        todo: todo.value
      }

      this.todos.splice(0, 0, aTodo)

      todo.value = ''

      this.change.emit()
    }
  }

  removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.change.emit()
  }

  onEnter($event, todo: HTMLInputElement) {
    if ($event.keyCode === 13) {
      this.addTodo(todo)
    }
  }

  strikeThrough($event) {
    if ($event.target.style.textDecoration) {
      $event.target.style.removeProperty('text-decoration');
    } else {
      $event.target.style.setProperty('text-decoration', 'line-through');
    }
    this.change.emit()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
