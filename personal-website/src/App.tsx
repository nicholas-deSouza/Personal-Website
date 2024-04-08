import MyInfo from "./components/callToAction";
import Header from "./components/header";
import { Secret } from "./components/secretCode/secret";
import SecretText from "./components/secretCode/secretText";
// import SwiperComponent from "./components/swiper";

function App() {
  return (
    <>
      <MyInfo />
      <SecretText />
      <Header />
      <Secret />
      {/* <SwiperComponent /> */}
    </>
  );
}

export default App;
