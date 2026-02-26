import { useEffect, useRef, useState } from "react"
import formatTime from "../util/formatTime"

const StopWatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)
  const startTimeRef = useRef(0)

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsedTime
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current)
      }, 1000)
    } else {
      clearInterval(intervalRef.current)
    }
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [isRunning, elapsedTime])

  const toggleRunning = () => {
    setIsRunning((prev) => !prev)
  }

  const resetStopWatch = () => {
    setIsRunning(false)
    setElapsedTime(0)
  }

  return (
    <div className="mt-8">
      <div className="mb-[15px] text-[#1e1e1e]">{formatTime(elapsedTime)}</div>
      <button className="btn mr-[15px]" onClick={toggleRunning}>
        {isRunning ? "일시정지" : "시작"}
      </button>
      <button className="btn" onClick={resetStopWatch}>
        초기화!
      </button>
    </div>
  )
}

export default StopWatch
