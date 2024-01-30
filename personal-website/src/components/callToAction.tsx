const MyInfo = () => {
  return (
    <div className="info-section">
      <h2> Hey, my name is </h2>
      <h1>Nicholas de Souza</h1>
      <h2>and I’m an aspiring Software Engineer. Welcome to my small slice of the internet! 👋🏼</h2>
      <a href="https://www.linkedin.com/in/nicholas-de-souza/">
        <img className="linked-in" alt="linkedin logo" src="/src/assets/linked-in-logo.png"></img>
      </a>
      <a href="https://github.com/nicholas-deSouza">
        <img className="github" alt="github logo" src="/src/assets/github-logo.png"></img>
      </a>
    </div>
  );
};

export default MyInfo;
