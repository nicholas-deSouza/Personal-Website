const MyInfo = () => {
  return (
    <div className="info-section">
      <h2 className="info-section-h2"> Hey, my name is </h2>
      <h1>Nicholas de Souza</h1>
      <h2 className="info-section-h2">
        and I’m an aspiring Software Engineer
        <br></br>
        <br></br>
        Welcome to my small slice of the internet and don't forget to check out my projects in the headers! 👋🏼
        <br></br>
        <p className="desktop-text">Be on the lookout for any easter eggs 🧐</p>
        <p className="mobile-text">I recommend you check the desktop version for the full experience 😉</p>
      </h2>
      <a href="https://www.linkedin.com/in/nicholas-de-souza/">
        <img className="linked-in" id="linked-in" alt="linkedin logo" src="/linked-in-logo.png"></img>
      </a>
      <a href="https://github.com/nicholas-deSouza">
        <img className="github" id="github-logo" alt="github logo" src="/github-logo.png"></img>
      </a>
      <a href="https://nicholas-desouza.github.io/resume/github-resume.pdf">
        <img className="resume" id="resume-id" alt="resume logo" src="/resume.png"></img>
      </a>
      <a href="mailto:nrdesouzag13@gmail.com">
        <img className="contact-me" id="contact-me-id" alt="contact me logo" src="/mail.png"></img>
      </a>
    </div>
  );
};

export default MyInfo;
