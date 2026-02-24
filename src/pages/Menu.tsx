import { Row, Col, Card, Button } from 'react-bootstrap';
import SectionWrapper from '../components/SectionWrapper';
import type { Food } from '../types';

const foods: Food[] = [
  { id: 1, name: 'Burger', description: 'Juicy grilled beef burger', price: 8, image: '', category: 'Lunch' },
  { id: 2, name: 'Pasta', description: 'Creamy Italian pasta', price: 10, image: '', category: 'Dinner' },
  { id: 3, name: 'Pizza', description: 'Stone-baked Italian pizza', price: 12, image: '', category: 'Dinner' },
];

function Menu() {
  return (
    <SectionWrapper title="Our Menu">
      <Row>
        {foods.map(food => (
          <Col xs={12} sm={6} md={4} lg={3} key={food.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={food.image || 'https://via.placeholder.com/400x300'}
                style={{ height: '220px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>{food.description}</Card.Text>
                <Card.Text className="fw-bold">${food.price}</Card.Text>
                <Button variant="danger" className="w-100">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </SectionWrapper>
  );
}

export default Menu;