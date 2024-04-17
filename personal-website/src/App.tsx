import MyInfo from "./components/callToAction";
import Header from "./components/header";
import { Secret } from "./components/secretCode/secret";
import SecretText from "./components/secretCode/secretText";

function App() {
  return (
    <>
      <MyInfo />
      <SecretText />
      <Header />
      <Secret />
    </>
  );
}

export default App;
