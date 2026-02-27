"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  blueClass?: string;
  whiteClass?: string;
}

export default function TypewriterText({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
  blueClass = "text-gradient",
  whiteClass = "text-white",
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex].replace("|", "");
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex(charIndex - 1);
          setDisplayText(currentPhrase.substring(0, charIndex - 1));
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }, 300);
      }
    } else {
      if (charIndex < currentPhrase.length) {
        timeout = setTimeout(() => {
          setCharIndex(charIndex + 1);
          setDisplayText(currentPhrase.substring(0, charIndex + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsPaused(true);
        }, 0);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isPaused, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  // Get the original phrase with delimiter to find split point
  const originalPhrase = phrases[phraseIndex];
  const splitIndex = originalPhrase.indexOf("|");
  
  // Render with colors
  const renderColoredText = () => {
    if (splitIndex === -1) {
      // No delimiter, use blue for all
      return <span className={blueClass}>{displayText}</span>;
    }
    
    // Split the display text based on how much has been typed
    const bluePart = displayText.substring(0, Math.min(displayText.length, splitIndex));
    const whitePart = displayText.length > splitIndex ? displayText.substring(splitIndex) : "";
    
    return (
      <>
        <span className={blueClass}>{bluePart}</span>
        <span className={whiteClass}>{whitePart}</span>
      </>
    );
  };

  return (
    <span>
      {renderColoredText()}
      <span className="animate-pulse text-blue-400 ml-0.5">|</span>
    </span>
  );
}
