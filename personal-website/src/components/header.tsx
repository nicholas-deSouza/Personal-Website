// import { useEffect, useRef } from "react";

const Header = () => {
  // add more dialog boxes for the rest
  window.onload = function () {
    const dialog = document.querySelector("dialog")!;
    const openDialog = document.getElementById("groove-generator")!;
    const closeDialog = document.querySelector("dialog button");
    openDialog.addEventListener("click", () => {
      dialog.showModal();
    });
    closeDialog?.addEventListener("click", () => {
      dialog.close();
    });
  };

  return (
    <div id="header" className="header">
      {/* <a href="https://www.groovegenerator.xyz/"> */}
      <button>
        <h2 id="groove-generator" className="groove-generator header-elements">
          Groove Generator
        </h2>
      </button>
      <dialog>
        <button className="dialog-close-btn">Close</button>
        <img alt="image of groove generator website"></img>
        <p>groove</p>
      </dialog>
      {/* </a> */}

      <a href="https://focus-4-you.surge.sh/">
        <h2 id="focus4you" className="focus-4-you header-elements">
          Focus4You
        </h2>
      </a>

      <a href="">
        <h2 id="contact" className="contact header-elements">
          Contact
        </h2>
      </a>
    </div>
  );
};

export default Header;
