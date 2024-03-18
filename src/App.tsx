import { useCallback, useEffect, useState } from 'preact/hooks';
import Add from './components/Add/Add';
import Header from './components/Header/Header';
import List from './components/List/List';
import { getTodos, todos } from './signals';
import './App.css';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { ITodo } from './types';

export function App() {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fecthTodos = useCallback(async () => {
    try {
      todos.value = await getTodos() as ITodo[];
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    let ignore: boolean = false;
    !ignore && fecthTodos();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Col className="d-flex justify-content-center">
          <Card>
            <Card.Body>
              <Header />
              <Add />
              {isLoading && <Spinner animation="border" role="status" />}
              {!todos.value.length && !isLoading ? <p>No data found</p> : <List />}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
