import { useState } from "react"

function App() {

    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])
    function addTodo(e) {
        e.preventDefault()
        if (text !== "") {
            console.log(text)
            setTodo([...todo, text])
            console.log(todo);
            setText("")

        } else {
            alert("please enter the value of todo")
        }

    }
    function deleteTodo(index) {
        todo.splice(index, 1)
        setTodo([...todo])

    }
    function updateTodo(index) {
        const a = prompt("update todo")
        if (a !== "") {
            todo[index] = a
            setTodo([...todo])
        } else {
            alert("pease enter the new updated value")
            updateTodo(index)
        }
    }


    return (
        <div>

            <h1>Todo app</h1>
            <form onSubmit={(e) => {
                addTodo(e)
            }}>
                <input type="text" placeholder="Enter Todo" onChange={(e) => {
                    setText(e.target.value)

                }} value={text} />
                <button type="submit">add Todo</button>
            </form >
            <ul>{
                todo.map((ele, index) => {
                    return <li key={index}>{index + 1}. {ele}
                        <button onClick={() => deleteTodo(index)}>delete</button>
                        <button onClick={() => updateTodo(index)}>edit</button>
                        </li>
                })
            }
            </ul>
        </div>
    )
}

export default App