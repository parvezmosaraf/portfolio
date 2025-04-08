
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
  className,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!words.length) return;

    const typeCharacter = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting ? text.slice(0, -1) : text + currentWord.charAt(text.length);

      setText(shouldDelete);

      if (!isDeleting && text === currentWord) {
        // Once word is typed, pause then start deleting
        setIsTyping(false);
        setTimeout(() => {
          setIsDeleting(true);
          setIsTyping(true);
        }, pauseDuration);
      } else if (isDeleting && text === "") {
        // Once deleted, move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    // Setup the timeout for typing or deleting
    let timeout: NodeJS.Timeout;
    if (isTyping) {
      timeout = setTimeout(() => {
        typeCharacter();
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [words, text, isDeleting, wordIndex, isTyping, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={cn("inline-block", className)}>
      {text}
      <span className="inline-block w-[2px] h-5 bg-current align-middle animate-blink" />
    </span>
  );
}
