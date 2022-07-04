import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  date = new Date()

  lastUpdate = ""

  todos = []

  deleteAll() {
    if(this.todos.length != 0) {
      this.todos = []
      this.changeTime()
    }
  }

  changeTime() {
    var newDate = new Date()
    this.lastUpdate = newDate.toLocaleTimeString()
  }

}
