import { CounterAction } from "./counter.action";
import { INITIAL_STATE } from "./counter.store";

export function counterReducer(state = INITIAL_STATE, action: CounterAction) {
    switch (action.type) {
        case 'INCREMENT': return { ...state, counter: state.counter + 1 }
        case 'DECREMENT': return { ...state, counter: state.counter - 1 }
        case 'RESET': return { ...state, counter: 0 }          
        default:
            break;
    }
}