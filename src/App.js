import Cart from "./components/Cart";
import Board from "./components/Board";
import Result from "./components/Result";
import Options from "./components/Options";

function App() {
  return (
    <Cart>
        <Options/>
        <Board/>
        <Result/>
    </Cart>
  );
}

export default App;
