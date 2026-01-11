import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="profile-img">
        <img src="/pic.png" alt="Anshul" />
      </div>
      
      <section className="portfolio-section">
        <h2>About Me</h2>
        <p>
          I am a BCA student and frontend developer. I have built FixIt,
          a home service booking website using React.
        </p>
      </section>

      <section className="portfolio-section">
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React JS</li>
          <li>UI Design</li>
          <li>Basic MongoDB (Learning)</li>
        </ul>
      </section>

      <section className="portfolio-section">
        <h2>Projects</h2>
        <p>
          <strong>FixIt</strong> - A home service booking website with
          services listing, smart help UI and booking flow.
        </p>
      </section>

      <section className="portfolio-section">
        <h2>Education</h2>
        <p>BCA - Bachelor of Computer Applications</p>
      </section>

    </div>
  );
}

export default Portfolio;
