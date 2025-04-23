import React, { useState, useRef } from "react";

interface TypewriterTextProps {
  label: string;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  label,
  className,
  onComplete,
}) => {
  const [text, setText] = useState("");
  const currentCharIndex = useRef(0);
  const hasAnimated = useRef(false);

  if (!hasAnimated.current) {
    hasAnimated.current = true;

    const animateTyping = () => {
      const nextChar = label.slice(0, currentCharIndex.current + 1);
      setText(nextChar);
      currentCharIndex.current++;

      if (currentCharIndex.current < label.length) {
        setTimeout(animateTyping, 100);
      } else {
        onComplete?.();
      }
    };

    animateTyping();
  }

  return (
    <p
      className={`${className || ""}`}
    >
      {text}
    </p>
  );
};

export default TypewriterText;
