import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

function getCountColor(count) {
  if (count >= 500) return 'text-purple-500'
  if (count >= 50) return 'text-blue-500'
  if (count >= 5) return 'text-green-500'
  if (count <= -500) return 'text-yellow-500'
  if (count <= -50) return 'text-orange-500'
  if (count <= -5) return 'text-red-500'
  return 'text-black'
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className={twMerge('text-4xl font-bold mb-4', getCountColor(count))}>{count}</h1>
      <div>
        <button className="btn" onClick={() => setCount((count) => count + 1)}>+1</button>
        <button className="btn" onClick={() => setCount((count) => count - 1)}>-1</button>
      </div>

      <div>
        <button className="btn" onClick={() => setCount((count) => count + 10)}>+10</button>
        <button className="btn" onClick={() => setCount((count) => count - 10)}>-10</button>
      </div>

      <div>
        <button className="btn" onClick={() => setCount((count) => count + 100)}>+100</button>
        <button className="btn" onClick={() => setCount((count) => count - 100)}>-100</button>
      </div>
    </>
  )
}

export default App
