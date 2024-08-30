import { useReducer } from "react"
import "./App.css"

const initialstate=0;

const reducer = (state, action) => {
  switch(action){
    case "Increment":
      return state+1;
    
    case "Decrement":
      return state-1;
    
    default:
      return state;

  }
}
function App() {
  const [count, dispatch] = useReducer(reducer, initialstate)

  return (
    <div className="counter">
     <div className="card">
     <div className="h1">
     <h1>Counter: {count}</h1>
     </div>
     <div className="botton">
     <button onClick={()=> dispatch("Increment")}>Increment</button>
     <button onClick={()=> dispatch("Decrement")}>Decrement</button>
     </div>
     </div>
    </div>
  )
}

export default App
