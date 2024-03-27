import MyInfo from "./components/callToAction";
import Header from "./components/header";
import GradientComponent from "./components/gradientComponent";
import { Secret } from "./components/secretCode/secret";

function App() {
  // window.addEventListener("DOMContentLoaded", () => {
  // const gradientCanvas = document.getElementById("gradient-canvas")!;

  // gradientCanvas.style.setProperty("--gradient-color-2", "#E8AE52");

  // const updatedColor = gradientCanvas.style.getPropertyValue("--gradient-color-2");
  // console.log(updatedColor);
  // });

  // if (gradientCanvas) {
  //   // gradientCanvas.style.setProperty("--gradient-color-1", "#E8AE52");

  //   gradientCanvas.style.setProperty("--gradient-color-2", "#E8AE52");
  //   gradientCanvas.style.setProperty("--gradient-color-3", "#E8AE52");

  //   (gradientCanvas.style.cssText = "--gradient-color-1"), "#E8AE52";
  // }
  return (
    <>
      <MyInfo />
      <Header />
      <GradientComponent />
      <Secret />
    </>
  );
}

export default App;
