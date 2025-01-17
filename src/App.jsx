import { useState } from 'react'
import CreateForm from './components/CreateForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>A new Vite App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <CreateForm />
    </>
  )
}

export default App
