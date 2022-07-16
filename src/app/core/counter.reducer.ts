import { CounterAction } from "./counter.action";
import { Counter } from "./counter.store";

export function counterReducer(state = Counter, action: CounterAction) {
    switch (action.type) {
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state - 1
        case 'RESET': return 0      
        default:
            break;
    }
}