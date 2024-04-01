import { useEffect } from "react";
import { Gradient } from "whatamesh";

interface GradientComponentProps {
  check?: boolean;
}

const GradientComponent: React.FC<GradientComponentProps> = ({ check }) => {
  // gradient colors update when it is rendered, check variable sees if konami code is activated
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");

    // updates gradient colors
    if (check) {
      const gradientCanvas = document.getElementById("gradient-canvas")!;
      gradientCanvas.style.setProperty("--gradient-color-1", "#E18531");
      gradientCanvas.style.setProperty("--gradient-color-2", "#CA7B4A");
      gradientCanvas.style.setProperty("--gradient-color-3", "#491f2f");
    }

    // renders again whenever check value is changed
    return () => {};
  }, [check]);

  return (
    <div>
      <svg className="svg">
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M1,0.001 C0.872,0.483,0.344,0.271,0,0.647 V1 H1 V0.001"></path>
        </clipPath>
      </svg>
      {/* key is used to set animation on re render of gradient */}
      <canvas key={check!.toString()} id="gradient-canvas" />
    </div>
  );
};

export default GradientComponent;
