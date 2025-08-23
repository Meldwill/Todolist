import './App.css'
import  {Todolist} from "./Components/Todolist.tsx";
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

    const [valueForDrushlag, setValueForDrushlag] = useState<FilterValueType>('All')


    const removeTasks = (taskId: number) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    const drushlagFoo = () => {
        switch (valueForDrushlag) {
            case 'Completed': {
                return tasks.filter(el => el.isDone === true)
            }

            case 'Active': {
                return tasks.filter(el => !el.isDone === true)
            }
            default:
                return tasks
        }
    }

    let drushlagVal = drushlagFoo()


    return (
        <div className="app">
            <Todolist title="What to learn"
                      tasks={drushlagVal}
                      removeTasks={removeTasks}
                      changeFilter={setValueForDrushlag}
            />


        </div>
    )
}


export default App
