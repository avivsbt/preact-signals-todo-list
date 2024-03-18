import { useSignal } from '@preact/signals';
import { useState } from 'preact/hooks';
import { memo } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { todos } from '../../signals';

const Add: React.FC = () => {
  const inputValue = useSignal<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    inputValue.value = target.value;
  };

  return (
    <div class="mt-3 mb-3">
      <InputGroup>
        <Form.Control
          placeholder="What do you need to do today?"
          value={inputValue.value}
          onChange={handleInputChange}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            let id = Math.max(...todos.value.map((u) => u.id)) + 1;
            todos.value = [
              ...todos.value,
              { todo: inputValue.value, completed: false, id, userId: 5 },
            ];
            inputValue.value = '';
          }}
        >
          Add 
        </Button>
      </InputGroup>
    </div>
  );
};

export default memo(Add);
