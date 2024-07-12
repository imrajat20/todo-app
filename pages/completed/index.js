import CompletedTask from "@/components/todo/CompletedTask";
import { MongoClient } from "mongodb";


const Completed = (props) => {

  
  return (
    <CompletedTask todos={props.todos} />
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://new_user:amityadav@project1.s2veazo.mongodb.net/todos?retryWrites=true&w=majority&appName=project1');
  const db = client.db();
  const todosCollection = db.collection('todos');

  // Fetch only incomplete todos
  const result = await todosCollection.find({ status: "complete" }).toArray();
  
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

export default Completed;
