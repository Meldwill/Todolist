// import {Button} from './Button'
import {FilterValueType, TaskType} from "../App.tsx";
import {useRef} from "react";
// import {useState} from "react";


export type Props = {
    removeTasks: (taskId: string) => void
    changeFilter: (val: FilterValueType) => void
    tasks: TaskType[]
    title: string
    addTask: (value: string) => void
}

export const Todolist = ({title, tasks, removeTasks,changeFilter, addTask}: Props) => {
        const inputRef = useRef<HTMLInputElement>(null);

        return (
            <div>
                <h3>{title}</h3>
                <div>
                    <input ref={inputRef}/>
                    {/*<Button title={'+'}/>*/}
                    <button onClick={()=> {
                        if (inputRef.current) {
                            addTask(inputRef.current.value);
                            inputRef.current.value = "";
                        }
                    }}>+</button>
                </div>
                {tasks.length === 0 ? (
                    <p>Тасок нет</p>
                ) : (
                    <ul>
                        {tasks.map(task => {
                            return (
                                <li key={task.id}>
                                    <button onClick={() => removeTasks(task.id)}>x</button>
                                    <input type="checkbox" checked={task.isDone}/>
                                    <span>{task.title}</span>
                                </li>
                            )
                        })}
                    </ul>
                )}
                <div>
                    <button onClick={() => changeFilter('All')}>All</button>
                    <button onClick={() => changeFilter('Active')}>Active</button>
                    <button onClick={() => changeFilter('Completed')}>Completed</button>
                </div>
            </div>
        )
    }