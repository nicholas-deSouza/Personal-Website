import { useRef } from "react";
import { AudioControls } from "./audioControls";

interface AudioVisualizerProps {
  positionInPlaylist: number;
  setPositionInPlaylist: (newPosition: number) => void;
}

let animationController: number;

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ positionInPlaylist, setPositionInPlaylist }) => {
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

  console.log("this is the audioVisualizer", positionInPlaylist);

  const visualizeData = () => {
    animationController = window.requestAnimationFrame(visualizeData);
    if (audioRef.current?.paused) {
      return window.cancelAnimationFrame(animationController);
    }
    const songData = new Uint8Array(140);
    analyzer.current?.getByteFrequencyData(songData);
    // console.log(songData);

    // default is 4
    const bar_width = 8;
    let start = 0;
    const ctx = canvasRef.current!.getContext("2d")!;
    canvasRef.current!.width = window.innerWidth;
    canvasRef.current!.height = window.innerHeight;

    // const observer = new ResizeObserver((entries) => {
    //     canvasRef.current!.width = canvasRef.current!.clientWidth;
    //     canvasRef.current!.height = canvasRef.current!.clientHeight;
    //   });
    //   observer.observe(canvasRef)

    // start of canvas building
    ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);

    canvasRef.current!.width = window.innerWidth;
    canvasRef.current!.height = window.innerHeight;

    for (let i = 0; i < songData.length; i++) {
      // compute x coordinate where we would draw
      // default is 4

      start = i * 32;

      // creates the linear gradient
      const gradient = ctx.createLinearGradient(0, 0, canvasRef.current!.width, 0);

      if (positionInPlaylist === 0) {
        gradient.addColorStop(0, "#E8AE52");
        gradient.addColorStop(0.43, "#CA7B4A");
        gradient.addColorStop(0.94, "#491f2f");
      } else if (positionInPlaylist === 1) {
        gradient.addColorStop(0, "#FDE131");
        gradient.addColorStop(0.43, "#30E44F");
        gradient.addColorStop(0.94, "#002A04");
      } else {
        gradient.addColorStop(0, "#30936D");
        gradient.addColorStop(0.43, "#72BE9B");
        gradient.addColorStop(0.94, "#257490");
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(start, 0, bar_width, songData[i]);
    }
  };

  const playlist: string[] = [
    "/src/assets/Kiss the Ring (Dune II) .mp3",
    "/src/assets/The Other Room (Edgerunners).mp3",
    "/src/assets/終末の7秒前 .mp3",
  ];

  return (
    <div className="audio-visualizer">
      <canvas ref={canvasRef}></canvas>
      <AudioControls
        audioRef={audioRef}
        handleAudioPlay={handleAudioPlay}
        playlist={playlist}
        positionInPlaylist={positionInPlaylist}
        setPositionInPlaylist={setPositionInPlaylist}
      />
    </div>
  );
};
