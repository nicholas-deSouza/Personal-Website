interface AudioControlsProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  handleAudioPlay: () => void;
}

export const AudioControls: React.FC<AudioControlsProps> = ({ audioRef, handleAudioPlay }) => {
  return (
    <audio
      className="audio-controls"
      ref={audioRef}
      onPlay={handleAudioPlay}
      controls // Use "controls" attribute to display default audio controls
      src="/src/assets/Dune_ Part Two Soundtrack _ Kiss the Ring - Hans Zimmer _ WaterTower [ ytmp3x.cc ].mp3"
    />
  );
};
