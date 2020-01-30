import React,{useCallback} from 'react';
import TodoTemplate from './Component/TodoTemplate';
import TodoInsert from './Component/TodoInsert';
import TodoList from './Component/TodoList';

const App = () =>{
  const [todos,setTodos] = React.useState(
    [
    {
      id : 1,
      text : '김충환',
      checked : true,
    },
    {
      id : 2,
      text : '정똥꼬',
      checked : true,
    },
    {
      id : 3,
      text : '이수빈',
      checked : true,
    },
  ]);
  const nextId = React.useRef(4);
  const Insert = (text) => {
    const todo = {
      id : nextId.current,
      text,
      checked : false,
    }
    setTodos(todos.concat(todo));
    nextId.current += 1;
  }

  const Remove = useCallback((id) =>{
    setTodos(todos.filter(todo => todo.id !== id));
  },[todos]);

  const Toggle = (id) => {
    setTodos(
      todos.map((todo) => 
        id === todo.id ? {...todo,checked : !todo.checked} : todo,
      ),
    )
  }
  return(
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={Insert}/>
        <TodoList todos={todos} onRemove={Remove} onToggle={Toggle}/>
      </TodoTemplate>
    </div>

  )
}


export default App;
