import {Task} from "./Task.tsx";

type TodolistProps = {
    truck: string
    tasks: TaskProps[]
}

type TaskProps = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = ({truck, tasks}: TodolistProps) => {

    const mappedTasks = tasks.map((el: TaskProps, index) => {
        debugger
        return (
            <Task key={index} title={el.title} isDone={el.isDone}/>
        )
    })

    return (
        <div>
            <h3>{truck}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {mappedTasks}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};