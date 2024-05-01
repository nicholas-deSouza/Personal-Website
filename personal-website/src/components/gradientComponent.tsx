// import { url } from "inspector";
import { useEffect } from "react";
import { Gradient } from "whatamesh";

interface GradientComponentProps {
  check?: boolean;
  positionInPlaylist: number;
}

const GradientComponent: React.FC<GradientComponentProps> = ({ check, positionInPlaylist }) => {
  // gradient colors update when it is rendered, check variable sees if konami code is activated

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");

    // updates gradient colors
    const gradientCanvas = document.getElementById("gradient-canvas")!;
    if (check) {
      if (positionInPlaylist === 0) {
        gradientCanvas.style.setProperty("--gradient-color-1", "#E18531");
        gradientCanvas.style.setProperty("--gradient-color-2", "#CA7B4A");
        gradientCanvas.style.setProperty("--gradient-color-3", "#491f2f");
      } else if (positionInPlaylist === 1) {
        gradientCanvas.style.setProperty("--gradient-color-1", "#FDE131");
        gradientCanvas.style.setProperty("--gradient-color-2", "#30E44F");
        gradientCanvas.style.setProperty("--gradient-color-3", "#002A04");
      } else {
        gradientCanvas.style.setProperty("--gradient-color-1", "#30936D");
        gradientCanvas.style.setProperty("--gradient-color-2", "#72BE9B");
        gradientCanvas.style.setProperty("--gradient-color-3", "#257490");
      }
    }

    // renders again whenever values change
    return () => {};
  }, [check, positionInPlaylist]);

  return (
    <div className="canvas-wrapper">
      {/* key is used to set animation on re render of gradient */}
      <canvas key={check!.toString()} id="gradient-canvas" />

      <svg className="svg">
        <defs>
          <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M1,0.25 C0.999,0.23,0.3,0.9,0,0.747 V1 H1 V0.001" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default GradientComponent;
