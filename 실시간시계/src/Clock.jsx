import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Clock 컴포넌트
 *
 * 실시간 시계를 표시하고 사용자가 시계를 시작하거나 정지할 수 있는 React 함수형 컴포넌트입니다.
 * 시간은 "시", "분", "초"로 나뉘어 표시됩니다.
 *
 * 주요 기능:
 * - 현재 시간을 "HH:mm:ss" 형식으로 표시합니다.
 * - 시계가 실행 중일 때 매초마다 시간을 업데이트합니다.
 **/
function Clock() {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);
  const clockRef = useRef();

  useEffect(() => {
    if (isRunning) {
      setTime(new Date());

      clockRef.current = setInterval(() => {
        setTime(new Date());
      }, 1000);
    } else {
      clearInterval(clockRef.current);
    }

    return () => {
      clearInterval(clockRef.current);
    };
  }, [isRunning]);

  const toggleTime = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  return (
    <div className="bg-[#fcf6d4] w-130 text-center rounded-3xl shadow-lg p-4 flex flex-col items-center gap-6">
      <h2>RealTime Clock</h2>
      <div>{time.toLocaleTimeString()}</div>
      <button
        onClick={toggleTime}
        className={`p-2 rounded-2xl size-fit ${isRunning ? 'bg-[#fc4c4c]' : 'bg-[#4cf054]'}`}
      >
        {isRunning ? '타이머 정지' : '타이머 시작'}
      </button>
    </div>
  );
}

export default Clock;
