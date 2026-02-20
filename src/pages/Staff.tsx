import { Container, Row, Col, Card } from 'react-bootstrap';
import type { Staff } from '../types';

const staff: Staff[] = [
  { id: 1, name: 'Alice Johnson', role: 'Chef', image: '' },
  { id: 2, name: 'Mark Lee', role: 'Waiter', image: '' },
  { id: 3, name: 'Sophia Kim', role: 'Manager', image: '' },
];

function StaffPage() {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Our Staff</h1>
      <Row>
        {staff.map(member => (
          <Col md={4} key={member.id} className="mb-4">
            <Card className="h-100 shadow-sm text-center">
              <Card.Img
                variant="top"
                src={member.image || 'https://via.placeholder.com/300x300'}
                className="rounded-circle mx-auto mt-3"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default StaffPage;