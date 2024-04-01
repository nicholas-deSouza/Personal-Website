interface AudioControlsProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  handleAudioPlay: () => void;
  playlist: string[];
}

export const AudioControls: React.FC<AudioControlsProps> = ({ audioRef, handleAudioPlay, playlist }) => {
  let currentTrackIndex = 0;
  let prevTrackIndex = -1;

  const playNext = () => {
    if (currentTrackIndex < playlist.length - 1) {
      currentTrackIndex++;
      audioRef.current!.src = playlist[currentTrackIndex];
      audioRef.current!.play;
    }
    console.log("current", currentTrackIndex);
  };

  const playPrev = () => {
    if (currentTrackIndex != 0) {
      // makes sure that currenTrackIndex is always 1 ahead
      prevTrackIndex = currentTrackIndex - 1;
      currentTrackIndex = currentTrackIndex - 1;
      audioRef.current!.src = playlist[prevTrackIndex];
      audioRef.current!.play;
    }
    console.log("prev", prevTrackIndex);
  };

  return (
    <div className="audio-controller">
      <audio
        className="audio-controls"
        ref={audioRef}
        onPlay={handleAudioPlay}
        controls // Use "controls" attribute to display default audio controls
        // instantiates the audio tag with the first song from the playlist array
        src={playlist[0]}
      />
      <button onClick={playNext}>Play Next</button>
      <button onClick={playPrev}>Play Prev</button>
    </div>
  );
};
