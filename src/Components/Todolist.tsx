import {Task} from "./Task.tsx";
import {Button} from "./Button.tsx";

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

    const mappedTasks = tasks.map((el: TaskProps) => {
        debugger
        return (
            <Task key={el.id}
                  title={el.title}
                  isDone={el.isDone}/>
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
                <Button title={"All"} />
                <Button title={"Active"} />
                <Button title={"Completed"} />
            </div>
        </div>
    );
};