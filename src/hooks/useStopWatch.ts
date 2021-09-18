import { useRef, useState } from 'react'

export const useStopWatch = () => {
  const [timer, setTimer] = useState(0)
  const increment = useRef<any>(null)

  const startTimer = () => {
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const resetTimer = () => {
    clearInterval(increment.current)
    setTimer(0)
  }

  return { startTimer, resetTimer, timer }
}
