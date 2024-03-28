import { useKonamiCode } from "./useKonamiCode";
import { useEffect, useState } from "react";
import { AudioVisualizer } from "../audioVisualizer";
import GradientComponent from "../gradientComponent";

export const Secret = () => {
  const konami = useKonamiCode();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (konami) {
      setCheck(true);
      // changes color of name tag
      const h1Color = document.querySelector("h1")!;
      h1Color.style.color = "#E18531";

      //        .swiper-button-next,
      // .swiper-button-prev

      // grabs first value from HTML Collections and type casts it to an HTML Element
      const swiperButtonPrev = document.getElementsByClassName("swiper-button-prev")[0] as HTMLElement;

      swiperButtonPrev.style.color = "black";

      console.log("Konami code activated");
    }
    // only renders when konami value is changed
  }, [konami]);

  return (
    <>
      <GradientComponent check={check} />
      {konami && <AudioVisualizer />}
    </>
  );
};
