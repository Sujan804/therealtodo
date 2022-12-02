import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./App.css";
import getAllTodos from "./services-api/actions/todosAction";
const Todo  = ()=> {
  const {isLoading,todos, error} = useSelector((state)=>state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
   <> 
      <h2>Todos apps</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {
          todos && todos.map((todo)=>{
            return(
              <article key={todo.id}>
                <h4>{todo.id}</h4>
                <p>{todo.title}</p>
              </article>
            )
          })
        }
      </section> 
   </>
  )
}

export default Todo;