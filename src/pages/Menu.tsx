import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import type { Food } from '../types';

const foods: Food[] = [
  { id: 1, name: 'Burger', description: 'Juicy grilled beef burger', price: 8, image: '', category: 'Lunch' },
  { id: 2, name: 'Pasta', description: 'Creamy Italian pasta', price: 10, image: '', category: 'Dinner' },
];

function Menu() {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Our Menu</h1>
      <Row>
        {foods.map(food => (
          <Col md={4} className="mb-4" key={food.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={food.image || 'https://via.placeholder.com/300x200'} />
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>{food.description}</Card.Text>
                <Card.Text className="fw-bold">${food.price}</Card.Text>
                <Button variant="danger">Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Menu;