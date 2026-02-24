import { Row, Col, Card } from 'react-bootstrap';
import SectionWrapper from '../components/SectionWrapper';
import type { Staff } from '../types';

const staff: Staff[] = [
  { id: 1, name: 'Alice Johnson', role: 'Head Chef', image: '' },
  { id: 2, name: 'Mark Lee', role: 'Manager', image: '' },
  { id: 3, name: 'Sophia Kim', role: 'Waitress', image: '' },
];

function StaffPage() {
  return (
    <SectionWrapper title="Meet Our Team">
      <Row>
        {staff.map(member => (
          <Col xs={12} sm={6} md={4} lg={3} key={member.id} className="mb-4">
            <Card className="text-center h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={member.image || 'https://via.placeholder.com/300'}
                className="rounded-circle mx-auto mt-4"
                style={{
                  width: '140px',
                  height: '140px',
                  objectFit: 'cover',
                  border: '4px solid #b02a37'
                }}
              />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text className="text-muted">{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </SectionWrapper>
  );
}

export default StaffPage;