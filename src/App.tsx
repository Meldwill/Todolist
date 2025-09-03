import './App.css'
import  {Todolist} from "./Components/Todolist.tsx";
import {useState} from "react";
import {v1} from "uuid";



export type TaskType = {
    id: string
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
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'Typescript', isDone: false},
        {id: v1(), title: 'RTK query', isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValueType>('All')


    const removeTasks = (taskId: string) => {
        const filteredTasks = tasks.filter((task) => {
            return task.id !== taskId
        })
        setTasks(filteredTasks)
    }

    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }

    const addTask = (title: string) => {
        const newTask = {id: v1(), title, isDone: true}
        setTasks([newTask, ...tasks])
    }

    let taskForTodolist = tasks
    if(filter === "Active") {
        taskForTodolist = tasks.filter(task => !task.isDone)
    }

    if(filter === "Completed") {
        taskForTodolist = tasks.filter(task => task.isDone)
    }

    return (
        <div className="app">
            <Todolist title="What to learn"
                      tasks={taskForTodolist}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    )
}


export default App
