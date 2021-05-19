import "./App.css";
import Bugs from "./components/Bugs";
import BugsList from "./components/BugsList";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BugsList />
    </Provider>
  );
}

export default App;
