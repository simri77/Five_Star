import { Container, Form, Button } from 'react-bootstrap';

function ContactPage() {
  return (
    <Container className="py-5" style={{ maxWidth: '600px' }}>
      <h1 className="mb-4 text-center">Contact Us</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Your message..." />
        </Form.Group>

        <Button variant="danger" type="submit" className="w-100">
          Send Message
        </Button>
      </Form>
    </Container>
  );
}

export default ContactPage;