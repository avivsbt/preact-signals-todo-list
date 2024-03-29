import { useSignal } from '@preact/signals';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { todos } from '../../signals';
import { Col, Row } from 'react-bootstrap';

const Add: React.FC = () => {
  const inputValue = useSignal<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    inputValue.value = target.value;
  };

  return (
    <Row className="mt-3 mb-3">
      <Col>
        <InputGroup>
          <Form.Control
            placeholder="What do you need to do today?"
            value={inputValue.value}
            onChange={handleInputChange}
          />
          <Button
            variant="outline-secondary"
            onClick={() => {
              let id = Math.max(...todos.value.map((u) => u.id)) + 1;
              todos.value = [
                ...todos.value,
                { todo: inputValue.value, completed: false, id, userId: 5 },
              ];
              inputValue.value = '';
            }}
            disabled={!inputValue.value}
          >
            Add
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Add;
