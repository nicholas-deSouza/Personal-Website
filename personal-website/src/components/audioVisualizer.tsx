import { useRef } from "react";
import { AudioControls } from "./audioControls";
// import {useState} from 'react'

let animationController: number;

export const AudioVisualizer = () => {
  // const [file, setFile] = useState<File | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const source = useRef<MediaElementAudioSourceNode>();
  const analyzer = useRef<AnalyserNode>();

  const handleAudioPlay = () => {
    const audioContext = new AudioContext();
    if (!source.current) {
      source.current = audioContext.createMediaElementSource(audioRef.current!);
      analyzer.current = audioContext.createAnalyser();
      source.current.connect(analyzer.current);
      analyzer.current.connect(audioContext.destination);
    }
    visualizeData();
  };

  const visualizeData = () => {
    animationController = window.requestAnimationFrame(visualizeData);
    if (audioRef.current?.paused) {
      return window.cancelAnimationFrame(animationController);
    }
    const songData = new Uint8Array(140);
    analyzer.current?.getByteFrequencyData(songData);
    console.log(songData);

    // default is 4
    const bar_width = 8;
    let start = 0;
    const ctx = canvasRef.current!.getContext("2d")!;
    const ctx2 = canvasRef.current!.getContext("2d")!;
    canvasRef.current!.width = window.innerWidth;
    canvasRef.current!.height = window.innerHeight;

    // const observer = new ResizeObserver((entries) => {
    //     canvasRef.current!.width = canvasRef.current!.clientWidth;
    //     canvasRef.current!.height = canvasRef.current!.clientHeight;
    //   });
    //   observer.observe(canvasRef)

    // start of canvas building
    ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    ctx2.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);

    canvasRef.current!.width = window.innerWidth;
    canvasRef.current!.height = window.innerHeight;

    for (let i = 0; i < songData.length; i++) {
      // compute x coordinate where we would draw
      // default is 4
      start = i * 32;

      //creates the linear gradient
      const gradient = ctx.createLinearGradient(0, 0, canvasRef.current!.width, 0);

      gradient.addColorStop(0.0, "#E8AE52");
      gradient.addColorStop(0.43, "#CA7B4A");
      gradient.addColorStop(0.94, "#491f2f");
      // gradient.addColorStop(0.8, "#1F5AEC");

      // ctx.fillStyle = "white";

      ctx.fillStyle = gradient;
      //   ctx.fillRect(start, canvasRef.current!.height, bar_width, -songData[i]);
    }

    for (let i = 0; i < songData.length; i++) {
      // compute x coordinate where we would draw
      // default is 4

      start = i * 32;

      // creates the linear gradient
      const gradient2 = ctx2.createLinearGradient(0, 0, canvasRef.current!.width, 0);

      // ctx2.fillStyle = "1F5AEC";

      // gradient2.addColorStop(0.2, "#E8AE52");
      // gradient2.addColorStop(0.5, "#CA7B4A");
      // gradient2.addColorStop(0.9, "#491F2F");

      gradient2.addColorStop(0, "#E8AE52");
      gradient2.addColorStop(0.43, "#CA7B4A");
      gradient2.addColorStop(0.94, "#491f2f");
      // gradient2.addColorStop(0.8, "#1F5AEC");

      ctx2.fillStyle = gradient2;
      ctx2.fillRect(start, 0, bar_width, songData[i]);
    }
  };

  //   const maxWidth = window.screen.width;
  //   const maxHeight = window.screen.height;

  return (
    <div className="audio-visualizer">
      {/* <input type="file" onChange={({ target: { files } }) => files![0] && setFile(files![0])} /> */}
      {/* {file && ( */}
      {/* )} */}

      <canvas ref={canvasRef}></canvas>
      <AudioControls audioRef={audioRef} handleAudioPlay={handleAudioPlay} />
    </div>
  );
};
