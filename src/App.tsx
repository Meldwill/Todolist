import './App.css'
import {Todolist} from "./Components/Todolist.tsx";

function App() {
    return (
        <div className="app">
            <Todolist truck={"What to learn-1"}/>
            <Todolist truck={"What to learn-2"}/>
            <Todolist/>
        </div>
    )
}


export default App
