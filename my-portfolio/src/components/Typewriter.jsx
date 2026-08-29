import { useEffect, useState } from "react";

// Cycles through phrases with a type / pause / delete rhythm.
const Typewriter = ({
  phrases = [],
  typingSpeed = 70,
  deletingSpeed = 35,
  pause = 1600,
}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;

    const current = phrases[index % phrases.length];
    let delay = deleting ? deletingSpeed : typingSpeed;

    if (!deleting && text === current) {
      delay = pause;
    } else if (deleting && text === "") {
      delay = 300;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="text-blue-400">
      {text}
      <span className="ml-0.5 inline-block w-[1ch] animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
