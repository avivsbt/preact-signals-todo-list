import { ITodo } from '../../types';
import { todos } from '../../signals';
import Button from 'react-bootstrap/esm/Button';
import { Form } from 'react-bootstrap';

type Props = {
  todo: ITodo;
  index: number;
};

const Item: React.FC<Props> = ({ todo, index }) => {
  return (
    <>
      <li class="text-left list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
        <div class="d-flex align-items-center pointer"
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
        <Button
          onClick={() => {
            todos.value.splice(index, 1);
            todos.value = [...todos.value];
          }}
          variant="danger"
        >
          Remove
        </Button>
      </li>
    </>
  );
};

export default Item;
