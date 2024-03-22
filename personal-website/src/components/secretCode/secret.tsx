import { useKonamiCode } from "./useKonamiCode";
import { useEffect } from "react";
// import sound from "/src/assets/Dune_ Part Two Soundtrack _ Kiss the Ring - Hans Zimmer _ WaterTower [ ytmp3x.cc ].mp3";
import { AudioVisualizer } from "../audioVisualizer";

export const Secret = () => {
  const konami = useKonamiCode();
  // const [audio, setAudio] = useState(false)

  // function play() {
  //   new Audio(sound).play();
  // }

  useEffect(() => {
    if (konami) {
      console.log("Konami code activated");

      // play();
    }
    // only renders when konami value is changed the first time
  }, [konami]);

  return konami && <AudioVisualizer />;
};
