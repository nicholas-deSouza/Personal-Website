import { useKonamiCode } from "./useKonamiCode";
import { useEffect, useState } from "react";
import { AudioVisualizer } from "../audioVisualizer";
import GradientComponent from "../gradientComponent";

export const Secret = () => {
  const konami = useKonamiCode();
  const [check, setCheck] = useState(false);
  const [positionInPlaylist, setPositionInPlaylist] = useState(0);

  const handlePositionChange = (newPosition: number) => {
    setPositionInPlaylist(newPosition);
  };

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

      const resumeLogo = document.getElementById("resume-id");
      if (resumeLogo) {
        resumeLogo.style.filter = "invert(1)";
      }

      const mailLogo = document.getElementById("contact-me-id");
      if (mailLogo) {
        mailLogo.style.filter = "invert(1)";
      }

      // dark mode changes for modal (dialog)
      const dialogBackgroundColor = document.querySelectorAll("dialog")!;
      dialogBackgroundColor.forEach((dialogBackgroundColor) => {
        dialogBackgroundColor.style.backgroundColor = "#1E1E1E";
        dialogBackgroundColor.style.borderColor = "#1E1E1E";
      });

      const h3DialogColor = document.querySelectorAll("h3")!;

      h3DialogColor.forEach((h3DialogColor) => {
        h3DialogColor.style.color = "white";
      });

      // dark mode changes for call to action and header
      const h1Color = document.querySelector("h1")!;
      if (positionInPlaylist === 0) {
        h1Color.style.color = "#E18531";
      } else if (positionInPlaylist === 1) {
        h1Color.style.color = "#FDE131";
      } else {
        h1Color.style.color = "#30936D";
      }

      const h2Color = document.querySelectorAll("h2")!;
      h2Color.forEach((h2Color) => {
        h2Color.style.color = "white";
      });
      const backgroundColorChange = document.getElementById("root")!;
      backgroundColorChange.style.backgroundColor = "#1E1E1E";

      const headerColorChanger = document.getElementById("header")!;
      headerColorChanger.style.backgroundColor = "#1E1E1E";
      headerColorChanger.style.boxShadow = "0 4px 4px rgba(0, 0, 0, 0.5)";

      const secretTextChange = document.getElementById("secret-text")!;
      secretTextChange.style.color = "#1E1E1E";
      secretTextChange.style.opacity = "0";

      console.log("Konami code activated");
    }
    // only renders when konami value is changed
  }, [konami, positionInPlaylist]);

  return (
    <>
      <GradientComponent check={check} positionInPlaylist={positionInPlaylist} />
      {konami && (
        <AudioVisualizer positionInPlaylist={positionInPlaylist} setPositionInPlaylist={handlePositionChange} />
      )}
    </>
  );
};
