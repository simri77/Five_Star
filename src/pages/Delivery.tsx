import { Row, Col, Card } from 'react-bootstrap';
import SectionWrapper from '../components/SectionWrapper';

const deliveryOptions = [
  { id: 1, name: 'Standard Delivery', time: '30–45 mins', price: '$2' },
  { id: 2, name: 'Express Delivery', time: '15–20 mins', price: '$5' },
  { id: 3, name: 'Pickup', time: '10–15 mins', price: 'Free' },
];

function DeliveryPage() {
  return (
    <SectionWrapper title="Delivery Options">
      <Row>
        {deliveryOptions.map(option => (
          <Col xs={12} sm={6} md={4} key={option.id} className="mb-4">
            <Card className="h-100 text-center shadow-sm p-4">
              <Card.Body>
                <Card.Title className="mb-3">{option.name}</Card.Title>
                <Card.Text>Time: {option.time}</Card.Text>
                <Card.Text className="fw-bold">{option.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </SectionWrapper>
  );
}

export default DeliveryPage;