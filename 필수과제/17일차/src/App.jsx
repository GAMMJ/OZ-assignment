import { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [, setQuery] = useState('');

  const debounceHandleChange = useMemo(() => {
    let timer;
    return (event) => {
      setQuery(event.target.value);
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log('디바운스 검색 쿼리:', event.target.value);
      }, 300);
    };
  }, []);

  const throttleHandleChange = useMemo(() => {
    let lastTime = 0;
    return (event) => {
      setQuery(event.target.value);
      const now = Date.now();
      if (now - lastTime >= 300) {
        console.log('스로틀 검색 쿼리:', event.target.value);
        lastTime = now;
      }
    };
  }, []);

  return (
    <div className="container">
      <h1>
        debounce와 throttle을
        <br />
        이용한 검색
      </h1>
      <div>
        <h2>Debounce</h2>
        <input
          type="text"
          placeholder="Debounce를 이용한 검색..."
          onChange={debounceHandleChange}
        />
      </div>
      <div>
        <h2>Throttle</h2>
        <input
          type="text"
          placeholder="Throttle을 이용한 검색..."
          onChange={throttleHandleChange}
        />
      </div>
    </div>
  );
}

export default App;
