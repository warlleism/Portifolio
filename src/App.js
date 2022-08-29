import DropButtom from "./component/dropArrow";
import Header from "./view/header";
import Body from "./view/body";
import UpArrow from "./component/upArrow";
import Provider from "./context/provider";

function App() {

  return (
    <Provider>
      <Header />
      <Body />
      <DropButtom />
      <UpArrow />
    </Provider>
  );
}

export default App;
