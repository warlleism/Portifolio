import DropButtom from "./component/dropArrow";
import Header from "./view/header";
import Body from "./view/body";
import UpArrow from "./component/upArrow";
import Provider from "./context/provider";
import Footer from "./view/footer"

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
