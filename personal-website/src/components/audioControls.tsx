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
      audioRef.current!.play();
    }
    console.log("current", currentTrackIndex);
  };

  const playPrev = () => {
    if (currentTrackIndex != 0) {
      // makes sure that currenTrackIndex is always 1 ahead
      prevTrackIndex = currentTrackIndex - 1;
      currentTrackIndex = currentTrackIndex - 1;
      audioRef.current!.src = playlist[prevTrackIndex];
      audioRef.current!.play();
    }
    console.log("prev", prevTrackIndex);
  };

  // code for dragging audio controls
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", event.currentTarget.id);
  };

  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(id);

    // Calculate the offset between the drop area and the mouse pointer
    const offsetX = event.clientX - event.currentTarget.getBoundingClientRect().left;
    const offsetY = event.clientY - event.currentTarget.getBoundingClientRect().top;

    // Position the dropped element at the calculated offset
    if (draggedElement) {
      draggedElement.style.position = "absolute";
      draggedElement.style.left = `${offsetX}px`;
      draggedElement.style.top = `${offsetY}px`;
      event.currentTarget.appendChild(draggedElement);
    }
  };

  return (
    <div className="audio-controller">
      <div onDragStart={handleDragStart} id="audioControlsID" draggable="true" className="audio-controls">
        <audio
          ref={audioRef}
          onPlay={handleAudioPlay}
          controls // Use "controls" attribute to display default audio controls
          // instantiates the audio tag with the first song from the playlist array
          src={playlist[0]}
        />
        <button onClick={playNext}>Play Next</button>
        <button onClick={playPrev}>Play Prev</button>
      </div>
      <div className="screen" onDragOver={enableDropping} onDrop={handleDrop}></div>
    </div>
  );
};
