import { createStore } from "redux";
import { counterReducer } from "../reducers/counterReducer";

import { rootReducer } from "../reducers/combReducer";

// export const store = createStore(counterReducer);

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
