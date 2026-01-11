import { useNavigate } from "react-router-dom";
import "./Services.css";

function Services() {

  const navigate = useNavigate();

  return (
    <div className="services-page">

      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          Choose from our wide range of professional home services
          designed to make your life easier.
        </p>
      </div>

      <div className="services-grid">

        <div className="service-card">
          <img src="/service1.png" alt="Plumber" />
          <h3>Plumber</h3>
          <p>Tap repair, pipe leakage, bathroom fittings.</p>
          <button onClick={() => navigate("/booking")}>
            Book Service
          </button>
        </div>

        <div className="service-card">
          <img src="/service2.png" alt="Electrician" />
          <h3>Electrician</h3>
          <p>Wiring, switches, fans and electrical repairs.</p>
          <button onClick={() => navigate("/booking")}>
            Book Service
          </button>
        </div>

        <div className="service-card">
          <img src="/service3.png" alt="Painter" />
          <h3>Painter</h3>
          <p>Interior and exterior painting services.</p>
          <button onClick={() => navigate("/booking")}>
            Book Service
          </button>
        </div>

        <div className="service-card">
          <img src="/service4.png" alt="Carpenter" />
          <h3>Carpenter</h3>
          <p>Furniture repair and wood work.</p>
          <button onClick={() => navigate("/booking")}>
            Book Service
          </button>
        </div>

      </div>
    </div>
  );
}

export default Services;
