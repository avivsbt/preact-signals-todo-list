import { memo } from 'react';
import { ITodo } from '../../types';
import { todos } from '../../signals';
import Button from 'react-bootstrap/esm/Button';

type Props = {
  todo: ITodo;
  index: number;
};

const Item: React.FC<Props> = ({ todo, index }) => {
  console.log("item",todo);
  
  return (
    <>
      <li class="text-left list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
        <div class="d-flex align-items-center ">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value=""
            checked={todo.completed}
            onInput={() => {
              todo.completed = !todo.completed;
              todos.value = [...todos.value];
            }}
          />
          {todo.completed ? <s>{todo.todo}</s> : <span>{todo.todo}</span>}
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

export default memo(Item);
