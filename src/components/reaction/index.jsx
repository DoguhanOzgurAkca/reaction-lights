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
    setLightIndex(1); // Immediately turn on the first light
    setReactionTime(null);
    lightsOutTimeRef.current = null;

    // Set the rest of the lights with a delay
    setTimeout(() => {
      for (let i = 2; i <= 5; i++) {
        setTimeout(() => setLightIndex(i), (i - 1) * 1000);
      }

      // After all lights have been turned on, start the sequence for lights out
      setTimeout(() => {
        const randomDelay = Math.random() * 1000;
        setTimeout(() => {
          setLightIndex(0);
          lightsOutTimeRef.current = Date.now();
          setLightsOut(true);
        }, randomDelay);
      }, 5000);
    }, 0); // Start the rest of the sequence immediately after setting the first light
  };

  const handleReaction = () => {
    if (lightsOutTimeRef.current) {
      const reactionTime = Date.now() - lightsOutTimeRef.current;
      setReactionTime(reactionTime);
      setLightsOut(false);
      setSequenceStarted(false);
      lightsOutTimeRef.current = null;
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (lightsOut) {
        handleReaction();
      }
    };

    const handleMouseDown = () => {
      if (lightsOut) {
        handleReaction();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
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
          onMouseDown={handleReaction}
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
      <p className="hidden lg:block absolute bottom-5 left-1/2 transform -translate-x-1/2 text-sm text-gray-600">
        You can test your reaction by pressing keys as well.
      </p>
    </div>
  );
}
