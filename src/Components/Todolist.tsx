
import {Button} from './Button'
import {FilterValueType, TaskType} from "../App.tsx";



type Props = {
    removeTasks: (taskId: number) => void
    changeFilter: (val: FilterValueType) => void
    tasks: TaskType[]
    title: string
}

export const Todolist = ({title, tasks, removeTasks, changeFilter}: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'+'} />
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <button onClick={()=> removeTasks(task.id)}>x</button>
                                <input type="checkbox" checked={task.isDone} />
                                <span>{task.title}</span>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <button onClick={()=> changeFilter('All')}>All</button>
                <button onClick={()=> changeFilter('Active')}>Active</button>
                <button onClick={()=> changeFilter('Completed')}>Completed</button>
                {/*<Button title={'All'} />*/}
                {/*<Button title={'Active'} />*/}
                {/*<Button title={'Completed'} />*/}
            </div>
        </div>
    )
}