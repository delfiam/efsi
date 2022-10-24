import '../css/styles.css'
import '../css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';


export default function Contacto () {
    return (
        <div style={{alignContent: 'center', alignItems: 'center', margin: 10}}>
            <Container>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Razón de contacto</Form.Label>
          <Form.Control type="text" placeholder="Razón de contacto" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Deseo recibir promociones y noticias a mi email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      </Container>
      </div>
    )
}