import { useCallback, useEffect } from 'preact/hooks';
import Add from './components/Add/Add';
import Header from './components/Header/Header';
import List from './components/List/List';
import { getTodos, todos } from './signals';
import './App.css';

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
    <>
      <section class="vw-100">
        <div class="container">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">

              <div class="card">
                <div class="card-body p-5">
                  <Header />
                  <Add />
                  {!todos.value.length ?
                    <p>No data found</p>
                    :
                    <List />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
