import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container className="py-5 text-center">
      <h1 className="display-4 mb-3">404</h1>
      <p className="mb-4">Oops! Page not found.</p>
      <Button variant="danger" onClick={() => navigate('/')}>
        Go Home
      </Button>
    </Container>
  );
}

export default NotFoundPage;