import TodoList from "@/components/todo/TodoList";
import { MongoClient } from "mongodb";
import { useState } from "react";

const HomePage = (props) => {

  const [todos, setTodos] = useState(props.todos);
  const deleteButton = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };
  return (
    <TodoList todos={todos} onDelete={deleteButton}/>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://new_user:amityadav@project1.s2veazo.mongodb.net/todos?retryWrites=true&w=majority&appName=project1');
  const db = client.db();
  const todosCollection = db.collection('todos');

  // Fetch only incomplete todos
  const result = await todosCollection.find({ status: "incomplete" }).toArray();
  
  // Log the result to verify data
  console.log(result);

  client.close();

  return {
    props: {
      todos: result.map(todo => ({
        name: todo.name,
        description: todo.description,
        id: todo._id.toString()
      }))
    },
    revalidate: 1
  };
};

export default HomePage;
