import { memo } from 'react';
import Stack from 'react-bootstrap/Stack';
import { computed } from '@preact/signals';
import { todos } from '../../signals';

const Header: React.FC = () => {
  const completedCount = computed<number>(
    () => todos.value.filter((todo) => todo.completed).length
  );

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <div class="p-2">Todo List</div>
        <div class="p-2 ms-auto"></div>
        <div class="vr" />
        <div class="p-2">Completed: {completedCount}</div>
      </Stack>
    </>
  );
};

export default memo(Header);
