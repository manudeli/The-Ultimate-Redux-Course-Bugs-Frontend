import logo from "./logo.svg";
import "./App.css";
import Bugs from "./store/components/Bugs";
import configureStore from "./store/configureStore";
import StoreContext from "./store/contexts/storeContext";

const store = configureStore();

function App() {
  return (
    <StoreContext.Provider value={store}>
      <Bugs />
    </StoreContext.Provider>
  );
}

export default App;
