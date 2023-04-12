import React, { useState, useEffect, useRef } from 'react';
import soundfile from './wednsday.mp3';

function TestPage() {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const MIN_DELAY = 2000; // Минимальная задержка в миллисекундах (2 секунды)
  const MAX_DELAY = 3000; // Максимальная задержка в миллисекундах (7 секунд)
  let delay;

  useEffect(() => {
    delay = Math.floor(Math.random() * (2000)) + MIN_DELAY;
    let intervalId;
    if (startTime !== null && endTime === null) {
      intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1);
    }
    return () => clearInterval(intervalId);
  }, [startTime, endTime]);

  const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const handleStartTest = async () => {

    setIsPlaying(true);
    await sleep(delay);
    setStartTime(Date.now());
    audioRef.current.play();
  };

  const handleStopTest = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
    setEndTime(Date.now());
    setShowResult(true);
  };

  const result = showResult && `Ваш результат: ${endTime - startTime} мс`;

  return (
    <div style={{ display: "flex", margin: "auto" }}>
      {!isPlaying ? (
        <button onClick={handleStartTest} disabled={startTime !== null}>
          Начать тест
        </button>
      ) : (
        <button onClick={handleStopTest} disabled={endTime !== null}>
          Стоп
        </button>
      )}
      <br />
      {showResult && result}
      <br />
      {startTime !== null && (
        <div>
          Прошло времени: {elapsedTime} мс (
          {new Date(elapsedTime).toISOString().substr(14, 9)})
        </div>
      )}
      <audio ref={audioRef}>
        <source src={soundfile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default TestPage;