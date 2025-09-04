// import {Button} from './Button'
import {FilterValueType, TaskType} from "../App.tsx";
import {ChangeEvent, KeyboardEvent, useState} from "react";

// import {useState} from "react";


export type Props = {
    removeTasks: (taskId: string) => void
    changeFilter: (val: FilterValueType) => void
    tasks: TaskType[]
    title: string
    addTask: (newTitle: string) => void
}

export const Todolist = ({title, tasks, removeTasks,changeFilter, addTask}: Props) => {

        const [newTitle, setNewTitle] = useState('')

        // const changeFilterAllHandler = () =>  changeFilter('All')
        // const changeFilterActiveHandler = () =>  changeFilter('Active')
        // const changeFilterCompletedHandler = () =>  changeFilter('Completed')


        const changeFilterHandler = (value: FilterValueType) =>  changeFilter(value)
        const addTaskHandler = () =>{
            addTask(newTitle)
            setNewTitle('')
        }
        const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement> ) => {
                if(e.key === 'Enter'){
                    addTaskHandler()
                }
        }
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement> ) => {
            setNewTitle(e.currentTarget.value)
        }
        const mappedTasks = tasks.map(task => {
            const removeTaskHandler = () => {
                removeTasks(task.id)
            }
            return (
                <li key={task.id}>
                    <button onClick={removeTaskHandler}>x</button>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                </li>
            )
        })


        return (
            <div>
                <h3>{title}</h3>
                <div>
                    <input value={newTitle}
                           onChange={onChangeHandler}
                            onKeyPress={onKeyPressHandler}
                    />
                    {/*<Button title={'+'}/>*/}
                    <button onClick={addTaskHandler}>+</button>
                </div>
                {tasks.length === 0 ? (
                    <p>Тасок нет</p>
                ) : (
                    <ul>
                        {mappedTasks}
                    </ul>
                )}
                <div>
                    <button onClick={() => changeFilterHandler('All')}>All</button>
                    <button onClick={() => changeFilterHandler('Active')}>Active</button>
                    <button onClick={() => changeFilterHandler('Completed')}>Completed</button>
                    {/*<button onClick={changeFilterCompletedHandler}>Completed</button>*/}
                </div>
            </div>
        )
    }