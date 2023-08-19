import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function MyComponent({ text }) {
  const el = useRef(null);
  let typed = null;
  let currentSentenceIndex = 0;

  useEffect(() => {
    const sentences = text.split(',');

    const options = {
      strings: [sentences[currentSentenceIndex]],
      typeSpeed: 80,
      onComplete: () => {
        setTimeout(() => {
          currentSentenceIndex++;
          if (currentSentenceIndex >= sentences.length) {
            currentSentenceIndex = 0;
          }
          typed.strings = [sentences[currentSentenceIndex]];
          typed.reset();
          typed.start();
        }, 2000);
      },
    };

    typed = new Typed(el.current, options);

    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, [text]);

  return (
    <span ref={el} />
  );
}
