// import { useEffect, useRef } from "react";

const Header = () => {
  // add more dialog boxes for the rest
  window.onload = function () {
    // dialog boxes for header elements
    const dialogGrooveGenerator = document.getElementById("groove-generator-dialog")! as HTMLDialogElement;
    const dialogFocus4You = document.getElementById("focus4you-dialog")! as HTMLDialogElement;

    const openDialogGrooveGenerator = document.getElementById("groove-generator")!;
    const openDialogFocus4You = document.getElementById("focus4you")!;

    const closeDialogGrooveGenerator = document.getElementById("groove-generator-dialog-btn-id");
    const closeDialogFocus4You = document.getElementById("focus4you-dialog-btn-id");

    openDialogGrooveGenerator.addEventListener("click", () => {
      dialogGrooveGenerator.showModal();
    });
    openDialogFocus4You.addEventListener("click", () => {
      dialogFocus4You.showModal();
    });

    closeDialogGrooveGenerator?.addEventListener("click", () => {
      dialogGrooveGenerator.close();
    });

    closeDialogFocus4You?.addEventListener("click", () => {
      dialogFocus4You.close();
    });
  };

  return (
    <div id="header" className="header">
      {/* <a href="https://www.groovegenerator.xyz/"> */}
      <button id="groove-generator-id" className="groove-generator-btn">
        <h2 id="groove-generator" className="groove-generator header-elements">
          Groove Generator
        </h2>
      </button>

      <dialog id="groove-generator-dialog">
        <button id="groove-generator-dialog-btn-id" className="dialog-close-btn">
          Close
        </button>
        <img src="src/assets/groove-generator.png" alt="image of groove generator website"></img>
        <h3>A website that allows for Spotify playlist generation with by just giving a phrase!</h3>
      </dialog>
      {/* </a> */}

      {/* <a href="https://focus-4-you.surge.sh/"> */}

      <button id="focus4you-id" className="focus4you-btn">
        <h2 id="focus4you" className="focus-4-you header-elements">
          Focus4You
        </h2>
      </button>

      <dialog id="focus4you-dialog">
        <button id="focus4you-dialog-btn-id" className="dialog-close-btn">
          Close
        </button>
        <img src="src/assets/focus4u.png" alt="image of focus4you website"></img>
        <h3>
          A one-stop location on the web focused on improving your productivity by incorporating features such as a
          pomodoro timer and a heatmap calendar!
        </h3>
      </dialog>

      {/* </a> */}

      <a href="">
        <h2 id="contact" className="contact header-elements">
          Contact
        </h2>
      </a>
    </div>
  );
};

export default Header;
