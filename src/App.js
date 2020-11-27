
import './App.css';
import React , {useState ,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { FormControl,Input,InputLabel } from '@material-ui/core';
import Todo from './Todo.js';
import db from './firebase';
import firebase from 'firebase';
function App() {
  //state is like a short term memeory  for a specific component and state gets cleared when the page is refreshed
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');


  useEffect(() => {
  
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
    
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  },[]);
  

  const addTodo = (event) => {
    //this will fire  when we click the add button
    event.preventDefault();//after submitting it would stop the page from refreshing
    db.collection('todos').add({
      todo:input,
      timestamp :firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');
  }
  
  
  return (
    <div className="App">
      
      <form>
      <FormControl>
      <InputLabel>Write a todo</InputLabel>
      <Input value={input} onChange={event =>
                                        setInput(event.target.value)}/>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
      </FormControl>
      </form>
    </div>
  );
}

export default App;
