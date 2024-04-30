// const Header = () => {
//   return (
//     <div id="header" className="header">
//       <a href="https://www.groovegenerator.xyz/">
//         <button id="groove-generator-id" className="groove-generator-btn">
//           <h2 id="groove-generator" className="groove-generator header-elements">
//             Groove Generator
//           </h2>
//         </button>
//       </a>

//       <a href="https://focus-4-you.surge.sh/">
//         <button id="focus4you-id" className="focus4you-btn">
//           <h2 id="focus4you" className="focus-4-you header-elements">
//             Focus4You
//           </h2>
//         </button>
//       </a>
//     </div>
//   );
// };

// export default Header;

const Header = () => {
  return (
    <div id="header" className="header">
      <ul className="header-list">
        <li className="header-item">
          <a href="https://www.groovegenerator.xyz/">
            <h2 id="groove-generator" className="groove-generator header-elements">
              Groove Generator
            </h2>
          </a>
        </li>
        <li className="header-item">
          <a href="https://focus-4-you.surge.sh/">
            <h2 id="focus4you" className="focus-4-you header-elements">
              Focus4You
            </h2>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
