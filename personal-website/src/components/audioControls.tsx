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
  // let currentTrackIndex = 0;
  // let prevTrackIndex = -1;

  // const playNext = () => {
  //   if (currentTrackIndex < playlist.length - 1) {
  //     currentTrackIndex++;
  //     // console.log("position after increment", positionInPlaylist);
  //     // setPositionInPlaylist(positionInPlaylist + 1);
  //     audioRef.current!.src = playlist[currentTrackIndex];
  //     audioRef.current!.play();
  //   }

  //   console.log("current", currentTrackIndex);
  // };

  // const playPrev = () => {
  //   if (currentTrackIndex != 0) {
  //     // makes sure that currentTrackIndex is always 1 ahead
  //     prevTrackIndex = currentTrackIndex - 1;
  //     currentTrackIndex = currentTrackIndex - 1;
  //     // setPositionInPlaylist(positionInPlaylist - 1);
  //     // console.log("position after decrement", positionInPlaylist);
  //     audioRef.current!.src = playlist[prevTrackIndex];
  //     audioRef.current!.play();
  //   }

  //   console.log("prev", prevTrackIndex);
  // };

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

  // useEffect(() => {
  //   // Set the audio source only when positionInPlaylist changes
  //   if (audioRef.current) {
  //     audioRef.current.src = playlist[positionInPlaylist];
  //   }
  // }, [positionInPlaylist]);

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
        <button className="playPrevBtn" onClick={playPrev}>
          Play Prev
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
          Play Next
        </button>
      </div>
      <div className="screen" onDragOver={enableDropping} onDrop={handleDrop}></div>
    </div>
  );
};
