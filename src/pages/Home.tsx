import { Container, Button } from 'react-bootstrap';

function Home() {
  return (
    <div className="bg-light py-5 text-center">
      <Container>
        <h1 className="display-4 mb-3">Fivestar Restaurant</h1>
        <p className="lead mb-4">
          Delicious traditional and modern cuisine. Fresh ingredients. Fast delivery.
        </p>
        <Button href="/menu" variant="danger" size="lg">
          View Our Menu
        </Button>
      </Container>
    </div>
  );
}

export default Home;