import { useEffect } from "react";
import { Gradient } from "whatamesh";

interface GradientComponentProps {
  check?: boolean;
}

const GradientComponent: React.FC<GradientComponentProps> = ({ check }) => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");

    if (check) {
      console.log(check);

      const gradientCanvas = document.getElementById("gradient-canvas")!;
      gradientCanvas.style.setProperty("--gradient-color-1", "#E8AE52");
      gradientCanvas.style.setProperty("--gradient-color-2", "#CA7B4A");
      gradientCanvas.style.setProperty("--gradient-color-3", "#491f2f");

      // gradientCanvas.style.setProperty(
      //   "--gradient-color-1", "#E8AE52;" +
      //   "--gradient-color-2", "#CA7B4A;" +
      //   "--gradient-color-3", "#491f2f"
      // );

      // const color = gradientCanvas.style.getPropertyValue("--gradient-color-2");

      // console.log(color);
    }

    return () => {};
  }, [check]);

  return <canvas id="gradient-canvas" data-transition-in />;
};

export default GradientComponent;
