'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

export default function TypingAnimation({ strings = [], speed = 100, deleteSpeed = 50, pauseTime = 2000 }) {
  const [text, setText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  const tick = useCallback(() => {
    const currentString = strings[stringIndex] || '';

    if (!isDeleting) {
      setText(currentString.substring(0, text.length + 1));

      if (text.length + 1 === currentString.length) {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      setText(currentString.substring(0, text.length - 1));

      if (text.length - 1 === 0) {
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
        return;
      }
    }
  }, [text, stringIndex, isDeleting, strings, pauseTime]);

  useEffect(() => {
    const delay = isDeleting ? deleteSpeed : speed;
    timeoutRef.current = setTimeout(tick, delay);
    return () => clearTimeout(timeoutRef.current);
  }, [tick, isDeleting, speed, deleteSpeed]);

  return (
    <span className="hero-typing">
      {text}
      <span className="typing-cursor" />
    </span>
  );
}
