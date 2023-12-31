import { useState } from "react"

function App() {
    const [num, setNum] = useState(0);
    const addNum = () => {
        if (num === 10) {
alert('aukat se age nai bhaag ai smjh 10 tak bola to 10 tak ab has nai nikal')
        }
        else {
            setNum(num + 1);
        }
    }
    const removeNum = () => {
        if (num === 0) {
            alert('himmat hai to krke dikha ab nikal console khol ke kia krrha abhi bhi sharam nai arhi dekhe jarha jab boldia nai hoskta to nikal na has kio rha hai');
        } else {
            setNum(num - 1);
        }
    }
    return (
        <>
            <h1>Hello world</h1>
            <button onClick={addNum}>Add {num}</button>
            <button onClick={removeNum}>Sub {num}</button>
        </>
    )
}

export default App