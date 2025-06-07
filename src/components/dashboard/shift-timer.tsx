"use client";

import { useShiftTimer, formatElapsed } from "@/hooks/use-shift-timer";

export function ShiftTimer() {
  const { isRunning, elapsed, startTimer, stopTimer } = useShiftTimer();

  const handleClick = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="hover:animate-pulse hover:text-xl border h-full w-full col-span-12 sm:col-span-4 grid place-items-center rounded"
    >
      {isRunning ? `Terminar turno (${formatElapsed(elapsed)})` : "Iniciar turno"}
    </button>
  );
}
