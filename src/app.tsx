import { useCallback, useEffect } from 'preact/hooks';
import './app.css';
import Add from './components/Add/Add';
import Header from './components/Header/Header';
import List from './components/List/List';
import { getTodos, todos } from './signals';

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
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card">
              <div class="card-body p-5">
                <Header />
                <Add />
                <List />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
