"use client";
import React, { useState, useRef, useEffect } from "react";

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
    <div className="relative flex flex-col items-center justify-center h-screen p-5 bg-gray-100">
      <div className="flex gap-4 mb-5">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`w-12 h-12 rounded-full bg-gray-300 shadow-lg transition-colors duration-300 ${
              index < lightIndex ? "bg-red-500" : ""
            }`}
          ></div>
        ))}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <button
          onClick={handleStartClick}
          disabled={sequenceStarted}
          className="px-6 py-3 text-white bg-blue-500 rounded-md disabled:bg-gray-300 transition-colors duration-300 hover:bg-blue-700 active:shadow-md"
        >
          Ready...
        </button>
        <button
          onMouseDown={handleAfterMouseDown}
          disabled={!lightsOut}
          className="px-6 py-3 text-white bg-green-500 rounded-md disabled:bg-gray-300 transition-colors duration-300 hover:bg-green-700 active:shadow-md"
        >
          Go!
        </button>
      </div>
      {reactionTime !== null && (
        <p className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-xl font-bold bg-white py-2 px-4 rounded-lg shadow-lg">
          Your reaction time: {reactionTime} ms
        </p>
      )}
    </div>
  );
}
