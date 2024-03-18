import { ITodo } from '../../types';
import { todos } from '../../signals';
import Button from 'react-bootstrap/esm/Button';
import { Col, Container, Form, ListGroup, Row } from 'react-bootstrap';

type Props = {
  todo: ITodo;
  index: number;
};

const Item: React.FC<Props> = ({ todo, index }) => {
  return (
    <ListGroup.Item>

      <Container className="h-50">
        <Row>
          <Col sm={8}>
            <div class="pointer text-left d-flex align-items-center"
              onClick={() => {
                todo.completed = !todo.completed;
                todos.value = [...todos.value];
              }}>
              <Form.Check
                checked={todo.completed}
                type='checkbox'
                id={`disabled-default-${todo.id}`}
              />
              <div class="p-2">
                {todo.completed ? <s>{todo.todo}</s> : <span>{todo.todo}</span>}
              </div>
            </div>
          </Col>
          <Col className="justify-content-end d-flex align-items-center" sm={4}>
            <Button
              onClick={() => {
                todos.value.splice(index, 1);
                todos.value = [...todos.value];
              }}
              variant="danger"
            >
              Remove
            </Button>
          </Col>
        </Row>
      </Container>


    </ListGroup.Item>
  );
};

export default Item;
