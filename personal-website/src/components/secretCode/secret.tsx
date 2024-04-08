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

      // inverts colors for logos
      const linkedInLogo = document.getElementById("linked-in");
      if (linkedInLogo) {
        linkedInLogo.style.filter = "invert(1)";
      }

      const gitHubLogo = document.getElementById("github-logo");
      if (gitHubLogo) {
        gitHubLogo.style.filter = "invert(1)";
      }

      // dark mode changes for call to action
      const h1Color = document.querySelector("h1")!;
      h1Color.style.color = "#E18531";
      const h2Color = document.querySelectorAll("h2")!;
      h2Color.forEach((h2Color) => {
        h2Color.style.color = "white";
      });
      const backgroundColorChange = document.getElementById("root")!;
      backgroundColorChange.style.backgroundColor = "#1E1E1E";

      const backgroundColorChanger = document.getElementById("header")!;
      backgroundColorChanger.style.backgroundColor = "#1E1E1E";
      backgroundColorChanger.style.boxShadow = "0 4px 4px rgba(0, 0, 0, 0.5)";

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
