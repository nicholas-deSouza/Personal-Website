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

      gradient.addColorStop(0, "#E8AE52");
      gradient.addColorStop(0.43, "#CA7B4A");
      gradient.addColorStop(0.94, "#491f2f");
      // gradient2.addColorStop(0.8, "#1F5AEC");

      ctx.fillStyle = gradient;
      ctx.fillRect(start, 0, bar_width, songData[i]);
    }
  };

  const playlist: string[] = [
    "/src/assets/Dune_ Part Two Soundtrack _ Kiss the Ring - Hans Zimmer _ WaterTower [ ytmp3x.cc ].mp3",
    "/src/assets/Marvel Animation_'s X-Men _'97 _ Intro _ Disney+ (320kbps).mp3",
    "/src/assets/P.T. Adamczyk - On the Prowl _ Cyberpunk 2077_ Phantom Liberty (Original Score) (320kbps).mp3",
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
