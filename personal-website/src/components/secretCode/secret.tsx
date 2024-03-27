import { useKonamiCode } from "./useKonamiCode";
import { useEffect, useState } from "react";
// import sound from "/src/assets/Dune_ Part Two Soundtrack _ Kiss the Ring - Hans Zimmer _ WaterTower [ ytmp3x.cc ].mp3";
import { AudioVisualizer } from "../audioVisualizer";
import GradientComponent from "../gradientComponent";

export const Secret = () => {
  const konami = useKonamiCode();
  const [check, setCheck] = useState(false);

  // function play() {
  //   new Audio(sound).play();
  // }

  useEffect(() => {
    if (konami) {
      setCheck(true);
      console.log("Konami code activated");

      // gradientCanvas.style.setProperty(
      //   "--gradient-color-1, #E8AE52 ",
      //   "--gradient-color-2, #CA7B4A ",
      //   "--gradient-color-3, #491f2f"
      // );
      // gradientCanvas.style.("--gradient-color-1", "#E8AE52");
      // gradientCanvas.style.setProperty("--gradient-color-2", "#CA7B4A");
      // const color = gradientCanvas.style.getPropertyValue("--gradient-color-2");
      // console.log(color);
      // gradientCanvas.style.setProperty("--gradient-color-3", "#491f2f");

      // play();
    }
    // only renders when konami value is changed the first time
  }, [konami]);

  // return konami && <AudioVisualizer />;
  return (
    <>
      <GradientComponent check={check} />
      {konami && <AudioVisualizer />}
    </>
  );
};
