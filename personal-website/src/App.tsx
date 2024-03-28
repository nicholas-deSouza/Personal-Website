import MyInfo from "./components/callToAction";
import Header from "./components/header";
import GradientComponent from "./components/gradientComponent";
import { Secret } from "./components/secretCode/secret";
import SwiperComponent from "./components/swiper";

function App() {
  return (
    <>
      <MyInfo />
      <Header />
      <SwiperComponent />
      <GradientComponent />
      <Secret />
    </>
  );
}

export default App;
