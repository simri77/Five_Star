import { Container, Row, Col, Card } from 'react-bootstrap';

const deliveryOptions = [
  { id: 1, name: 'Standard Delivery', time: '30-45 mins', price: '$2' },
  { id: 2, name: 'Express Delivery', time: '15-20 mins', price: '$5' },
  { id: 3, name: 'Pickup', time: '10-15 mins', price: 'Free' },
];

function DeliveryPage() {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Delivery Options</h1>
      <Row>
        {deliveryOptions.map(option => (
          <Col md={4} key={option.id} className="mb-4">
            <Card className="h-100 shadow-sm text-center p-3">
              <Card.Body>
                <Card.Title>{option.name}</Card.Title>
                <Card.Text>Time: {option.time}</Card.Text>
                <Card.Text>Price: {option.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DeliveryPage;