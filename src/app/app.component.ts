import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { DECREMENT, INCREMENT, RESET } from './actions';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-con';
  @select('counter') counter;

  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT})
  }

  decrement() {
    this.ngRedux.dispatch({ type: DECREMENT})
  }

  reset() {
    this.ngRedux.dispatch({ type: RESET})
  }
}
