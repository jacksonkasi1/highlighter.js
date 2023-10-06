import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SamplePage from './lib/SamplePage'
import HighlightProvider from './lib'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HighlightProvider
     color="green" 
     size="20px" 
     show="Puff"
    >
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <SamplePage />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </HighlightProvider>
    </>
  )
}

export default App
