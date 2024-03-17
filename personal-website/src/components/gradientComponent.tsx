import { useEffect } from "react";
import { Gradient } from "whatamesh";

const GradientComponent = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");

    return () => {};
  }, []);

  return <canvas id="gradient-canvas" data-transition-in />;
};

export default GradientComponent;
