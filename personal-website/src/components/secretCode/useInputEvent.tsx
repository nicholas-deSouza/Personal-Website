// credit from https://www.youtube.com/watch?v=08Gd6ZABaII

import { useEffect, useState } from "react";

export const useInputEvent = () => {
  // string or null type
  const [key, setKey] = useState<string | null>(null);

  useEffect(() => {
    const keyDownHandler = ({ code }: { code: string }) => setKey(code);
    const keyUpHandler = () => setKey(null);

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, []);

  return key;
};
