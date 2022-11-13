// context yerıne burada store kullanılır. creat yapılırken. ıcıne bır reducer alır. reduser ınport edılırken ındex.jsx yazmaya gerek olmuyor. provıder ıle sarmallea. ıcıne store yazdık.

import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { Provider } from "react-redux";
import { store } from "./redux";
// import { legacy_createStore as createStore } from "redux";
// import reducer from "./redux";

function App() {
  // const store = createStore(reducer);
  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
