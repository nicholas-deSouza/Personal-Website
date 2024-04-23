interface AudioControlsProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  handleAudioPlay: () => void;
  playlist: string[];
  positionInPlaylist: number;
  setPositionInPlaylist: (newPosition: number) => void; // Add this line
}

export const AudioControls: React.FC<AudioControlsProps> = ({
  audioRef,
  handleAudioPlay,
  playlist,
  positionInPlaylist,
  setPositionInPlaylist,
}) => {
  const playNext = () => {
    if (positionInPlaylist < playlist.length - 1) {
      setPositionInPlaylist(positionInPlaylist + 1);
      if (audioRef.current) {
        audioRef.current.src = playlist[positionInPlaylist + 1];
        audioRef.current.play(); // Play the audio
      }
    }
  };

  const playPrev = () => {
    if (positionInPlaylist !== 0) {
      setPositionInPlaylist(positionInPlaylist - 1);
      if (audioRef.current) {
        audioRef.current.src = playlist[positionInPlaylist - 1];
        audioRef.current.play(); // Play the audio
      }
    }
  };

  const songNames = ["Kiss the Ring", "The Other Room", "Seven Seconds 'till the End"];

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
        <h3 className="song-names">Now Playing: {songNames[positionInPlaylist]}</h3>
        <button className="playPrevBtn" onClick={playPrev}>
          <img src="/Play Prev.png"></img>
        </button>
        <audio
          ref={audioRef}
          onPlay={handleAudioPlay}
          controls // Use "controls" attribute to display default audio controls
          // instantiates the audio tag with the first song from the playlist array
          src={playlist[0]}
          autoPlay={false}
        />
        <button className="playNextBtn" onClick={playNext}>
          <img src="/Play Next.png"></img>
        </button>
      </div>
      <div className="screen" onDragOver={enableDropping} onDrop={handleDrop}></div>
    </div>
  );
};
