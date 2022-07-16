import { Component, OnInit } from '@angular/core';
import { INITIAL_STATE, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DECREMENT, INCREMENT, RESET } from '../core/counter.action';
import { CounterState } from '../core/counter.store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: Observable<CounterState>

  constructor(private store: Store<{ count: CounterState }>) { 
    store.dispatch({ type: RESET })
    this.counter = store.select('count')
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }
 
  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }
 
  reset() {
    this.store.dispatch({ type: RESET });
  }

  ngOnInit() {
  }

}
