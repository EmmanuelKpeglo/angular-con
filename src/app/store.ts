import { DECREMENT, INCREMENT, RESET } from "./actions";

export interface IAppState {
    counter: number;
}

export const INITIAL_STATE: IAppState  = {
    counter: 0
}

export function rootReducer (state, action): IAppState {
    switch (action.type) {
        case INCREMENT: 
            return { counter: state.counter + 1 }
        case DECREMENT:
            return { counter: state.counter - 1 }
        case RESET: 
            return { counter: 0 }
        default:
            break;
    }
    return state;
}