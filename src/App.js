import DropButtom from "./component/dropArrow";
import Provider from "./context/provider";
import UpArrow from "./component/upArrow";
import Header from "./view/header";
import Footer from "./view/footer"
import Body from "./view/body";

function App() {

  return (
    <Provider>
      <Header />
      <Body />
      <Footer />
      <DropButtom />
      <UpArrow />
    </Provider>
  );
}

export default App;
