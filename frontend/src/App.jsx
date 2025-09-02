import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* 👇 Changed the heading */}
      <h1>Hello Varsheni 👋</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You clicked {count} times
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to see changes instantly
        </p>
      </div>

      <p className="read-the-docs">
        Keep coding and exploring React 🚀
      </p>
    </>
  )
}

export default App
