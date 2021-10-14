import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cache from "./cache/reducer";

const rootReducer = combineReducers({ cache });

const store = createStore(rootReducer, composeWithDevTools());

export default { store };

export type RootState = ReturnType<typeof rootReducer>;
