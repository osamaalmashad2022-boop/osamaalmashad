'use client';
import { useState, useEffect } from 'react';

export default function TypingAnimation({ strings = [], speed = 100, deleteSpeed = 50, pauseTime = 2000 }) {
  const [text, setText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    if (!strings || strings.length === 0) return;

    const currentString = strings[stringIndex] || '';
    let timer;

    if (!isDeleting && text === currentString) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
      }, 0);
    } else {
      const delay = isDeleting ? deleteSpeed : speed;
      timer = setTimeout(() => {
        setText(currentString.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, stringIndex, strings, speed, deleteSpeed, pauseTime]);

  return (
    <span className="hero-typing">
      {text}
      <span className="typing-cursor" />
    </span>
  );
}
