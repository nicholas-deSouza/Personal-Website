const Header = () => {
  return (
    <div id="header" className="header">
      <ul className="header-list">
        <li className="header-item">
          <a id="groove-generator" className="groove-generator header-elements" href="https://www.groovegenerator.xyz/">
            {/* <h2 id="groove-generator" className="groove-generator header-elements">
              Groove Generator
            </h2> */}
            Groove Generator
          </a>
        </li>
        <li className="header-item">
          <a id="focus4you" className="focus-4-you header-elements" href="https://focus-4-you.surge.sh/">
            {/* <h2 id="focus4you" className="focus-4-you header-elements">
              Focus4You
            </h2> */}
            Focus4You
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
