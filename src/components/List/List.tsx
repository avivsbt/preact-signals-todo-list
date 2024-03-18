import { ITodo } from '../../types';
import Item from '../Item/Item';
import { todos } from '../../signals';
import { ListGroup } from 'react-bootstrap';

const List: React.FC = () => {
  return (
    <>
      <ListGroup variant="flush" className="list-group p-0 m-0">
        {todos.value.map((todo: ITodo, index: number) => (
          <Item index={index} todo={todo} key={todo.id} />
        ))}
      </ListGroup>
    </>
  );
};

export default List;
