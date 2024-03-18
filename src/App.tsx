import { useCallback, useEffect } from 'preact/hooks';
import Add from './components/Add/Add';
import Header from './components/Header/Header';
import List from './components/List/List';
import { getTodos, todos } from './signals';
import './App.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

export function App() {

  const fecthTodos = useCallback(async () => {
    try {
      todos.value = await getTodos();
      console.log(todos);
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
    <Container>
      <Row>
        <Col>
          <Card >
            <Card.Body>
              <Header />
              <Add />
              {!todos.value.length ?
                <p>No data found</p>
                :
                <List />
              }
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
