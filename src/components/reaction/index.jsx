"use client";

import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function ReactionLights() {
  const [lightIndex, setLightIndex] = useState(0);
  const [sequenceStarted, setSequenceStarted] = useState(false);
  const [lightsOut, setLightsOut] = useState(false);
  const [reactionTime, setReactionTime] = useState(null);
  const lightsOutTimeRef = useRef(null);

  const handleStartClick = () => {
    setSequenceStarted(true);
    setLightsOut(false);
    setLightIndex(0);
    setReactionTime(null);

    for (let i = 1; i <= 5; i++) {
      setTimeout(() => setLightIndex(i), i * 1000);
    }

    setTimeout(() => {
      const randomDelay = Math.random() * 1000;
      setTimeout(() => {
        setLightIndex(0);
        lightsOutTimeRef.current = Date.now();
        setLightsOut(true);
      }, randomDelay);
    }, 5000);
  };

  const handleAfterMouseDown = () => {
    if (lightsOutTimeRef.current) {
      const reactionTime = Date.now() - lightsOutTimeRef.current;
      setReactionTime(reactionTime);
      setLightsOut(false);
      setSequenceStarted(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        if (lightsOut) {
          handleAfterMouseDown();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightsOut]);

  return (
    <div className="reaction-lights-container">
      <div className="reaction-lights">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`light ${index < lightIndex ? "red" : ""}`}
          ></div>
        ))}
      </div>
      <div className="buttons-container">
        <button onClick={handleStartClick} disabled={sequenceStarted}>
          Ready...
        </button>
        <button onMouseDown={handleAfterMouseDown} disabled={!lightsOut}>
          Go!
        </button>
      </div>
      {reactionTime !== null && (
        <p className="reaction-time">Your reaction time: {reactionTime} ms</p>
      )}
    </div>
  );
}
