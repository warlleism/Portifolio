import { useEffect } from "react";
import Header from "./view/header";
import Body from "./view/body";


function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
