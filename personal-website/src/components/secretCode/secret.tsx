import { useKonamiCode } from "./useKonamiCode";
import { useEffect } from "react";

export const Secret = () => {
  const konami = useKonamiCode();

  useEffect(() => {
    if (konami) console.log("Konami code activated");
    // only renders when konami value is changed
  }, [konami]);

  return null;
};
