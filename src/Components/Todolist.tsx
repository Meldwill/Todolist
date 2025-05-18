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

    return (
        <div>
            <h3>{truck}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasks.map((el: TaskProps) => {

                    return (
                        <li>
                            <input type="checkbox" checked={el.isDone}/> <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};