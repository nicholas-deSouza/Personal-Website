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

  return <canvas id="gradient-canvas" data-transition-in />;
};

export default GradientComponent;
