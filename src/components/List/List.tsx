import { ITodo } from '../../types';
import Item from '../Item/Item';
import { todos } from '../../signals';

const List: React.FC = () => {
  return (
    <>
      <ul class="list-group p-0 m-0">
        {todos.value.map((todo: ITodo, index: number) => (
          <Item index={index} todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};

export default List;
