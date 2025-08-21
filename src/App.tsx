import './App.css'
import {Todolist} from "./Components/Todolist.tsx";
import {useState} from "react";


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValueType = "All" | "Active" | "Completed"

function App() {

    // let tasks: TaskType[] = [
    //     { id: 1, title: 'HTML&CSS', isDone: true },
    //     { id: 2, title: 'JS', isDone: true },
    //     { id: 3, title: 'ReactJS', isDone: false },
    //     { id: 4, title: 'Redux', isDone: false },
    //     { id: 5, title: 'Typescript', isDone: false },
    //     { id: 6, title: 'RTK query', isDone: false },
    // ]

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ])


    const removeTasks = (taskId: number) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    const changeFilter = (val: FilterValueType) => {
        console.log(val)
    }


    return (
        <div className="app">
            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
            />

        </div>
    )
}


export default App
