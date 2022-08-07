import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormC() {
  return (
    <div className='container'>
    <Form>
        <Form.Group className="mb-3">
        <Form.Label>Nombre </Form.Label>
        <Form.Control type="text" placeholder="Ingresar nombre" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Apellido </Form.Label>
        <Form.Control type="text" placeholder="Ingresar apellido" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresar email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="number" placeholder="Ingresar edad" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </div>
  );
}

export default FormC;