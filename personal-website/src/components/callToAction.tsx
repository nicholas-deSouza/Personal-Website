const MyInfo = () => {
  return (
    <div className="info-section">
      <h2 className="info-section-h2"> Hey, my name is </h2>
      <h1>Nicholas de Souza</h1>
      <h2 className="info-section-h2">
        and I’m an aspiring Software Engineer.
        <br></br>
        <br></br>
        Welcome to my small slice of the internet and don't forget to check out my projects in the header! 👋🏼
      </h2>
      <a href="https://www.linkedin.com/in/nicholas-de-souza/">
        <img className="linked-in" id="linked-in" alt="linkedin logo" src="/src/assets/linked-in-logo.png"></img>
      </a>
      <a href="https://github.com/nicholas-deSouza">
        <img className="github" id="github-logo" alt="github logo" src="/src/assets/github-logo.png"></img>
      </a>
      <a>
        <img className="resume" id="resume-id" alt="resume logo" src="/src/assets/resume.png"></img>
      </a>
      <a href="mailto:nrdesouzag13@gmail.com">
        <img className="contact-me" id="contact-me-id" alt="contact me logo" src="/src/assets/mail.png"></img>
      </a>
    </div>
  );
};

export default MyInfo;
