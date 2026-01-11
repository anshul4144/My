import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home">

      
      <section className="hero">
        <div className="hero-text">
          <h1>Trusted Home Services at Your Doorstep</h1>
          <p>
            Hire professional plumbers, electricians, painters and carpenters
            for your home needs easily with FixIt.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate("/services")}>
              View Services
            </button>
            <button className="secondary-btn" onClick={() => navigate("/smart-help")}>
              Get Help
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src="/home.png" alt="Home Services" />
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="service-cards">

          <div className="card" onClick={() => navigate("/services")}>
            <img src="/service1.png" alt="Plumber" />
            <h3>Plumber</h3>
            <p>Tap repair, pipe leakage and bathroom fittings.</p>
          </div>

          <div className="card" onClick={() => navigate("/services")}>
            <img src="/service2.png" alt="Electrician" />
            <h3>Electrician</h3>
            <p>Wiring, switches, fans and electrical repairs.</p>
          </div>

          <div className="card" onClick={() => navigate("/services")}>
            <img src="/service3.png" alt="Painter" />
            <h3>Painter</h3>
            <p>Interior and exterior painting services.</p>
          </div>

          <div className="card" onClick={() => navigate("/services")}>
            <img src="/service4.png" alt="Carpenter" />
            <h3>Carpenter</h3>
            <p>Furniture repair, fitting and wood work.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
