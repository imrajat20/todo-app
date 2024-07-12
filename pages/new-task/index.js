import { useRouter } from "next/router";
import TodoForm from "@/components/todo/TodoForm";


const TaskPage = () => {

    const router = useRouter();
    const onAddMeetupHandler = async(data) => {
        const result = await fetch('/api/new-task',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let newdata = await result.json();
        console.log(newdata)
        router.push('/')
    };
    return (  <TodoForm onAddMeetup={onAddMeetupHandler}/>);
};

export default TaskPage;