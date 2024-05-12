import { store } from "../store/store";

document.querySelector("#incr").addEventListener("click", () => {
  store.dispatch({ type: "INCREMENTED" });
});

document.querySelector("#decr").addEventListener("click", () => {
  store.dispatch({ type: "DECREMENTED" });
});

// Action color Random

document.querySelector("#randColor").addEventListener("click", () => {
  let randomColor = `rgb(${Math.random() * 255},${Math.random() * 255},${
    Math.random() * 255
  })`;
  store.dispatch({ type: "COLOR_CHANGED", payload: randomColor });
});

// Action number Random
document.querySelector("#randNum").addEventListener("click", () => {
  const randomNumber = Math.round(Math.random() * 10);
  store.dispatch({ type: "CHANGE_NUMBER", payload: randomNumber });
});
