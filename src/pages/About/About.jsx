import "./About.css";

function About() {
  return (
    <div className="about-page">

      <h1>About FixIt</h1>

      <div className="about-content">

      
        <div className="about-image">
          <img src="/about.png" alt="About FixIt" />
        </div>

       
        <div className="about-text-area">
          <p>
            FixIt is a home service platform that helps users find skilled
            professionals like plumbers, electricians, painters and carpenters
            for their household work.
          </p>

          <p>
            Our aim is to make home services simple, reliable and accessible
            for everyone using modern technology.
          </p>

          <div className="about-points">
            <div className="point"> Trusted Professionals</div>
            <div className="point"> Easy Service Booking</div>
            <div className="point"> Affordable Prices</div>
            <div className="point"> Smart Help Support</div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default About;
