import { useKonamiCode } from "./useKonamiCode";
import { useEffect } from "react";
import sound from "/src/assets/Dune_ Part Two Soundtrack _ Kiss the Ring - Hans Zimmer _ WaterTower [ ytmp3x.cc ].mp3";

export const Secret = () => {
  const konami = useKonamiCode();

  function play() {
    new Audio(sound).play();
  }

  useEffect(() => {
    if (konami) {
      console.log("Konami code activated");
      play();
    }
    // only renders when konami value is changed the first time
  }, [konami]);

  return null;
};
