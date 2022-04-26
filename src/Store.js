import {rootReducers} from './reducers/index';
import { createStore } from "redux";


export const store = createStore(rootReducers);