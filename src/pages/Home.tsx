import { Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <section className="hero-section d-flex align-items-center text-center text-white">
      <Container fluid="lg">
        <div className="hero-content mx-auto">
          <h1 className="hero-title mb-3">
            Fivestar Restaurant
          </h1>

          <p className="hero-subtitle mb-4">
            Delicious traditional and modern cuisine. Fresh ingredients.
            Fast delivery.
          </p>

          <NavLink to="/menu" className="text-decoration-none">
            <Button variant="danger" size="lg" className="px-4">
              View Our Menu
            </Button>
          </NavLink>
        </div>
      </Container>
    </section>
  );
}

export default Home;