import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import LogRocket from 'logrocket';

import rootReducer from "./reducers";



// initialize store
const store =
    process.env.NODE_ENV === "production"
        ? createStore(rootReducer, applyMiddleware(thunk))
        : createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export { store };
