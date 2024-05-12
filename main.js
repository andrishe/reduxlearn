import "./style.css";

import { store } from "./redux/store/store";
import "./redux/action/action";

const counterContainer = document.querySelector("#counter");
const body = document.querySelector("body");

const render = () => {
  const { color, counter } = store.getState();

  counterContainer.innerHTML = counter.counter;
  body.style.backgroundColor = color.color;
};

render();
store.subscribe(render);
