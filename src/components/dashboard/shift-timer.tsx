"use client";

import { useShiftTimer, formatElapsed } from "@/hooks/use-shift-timer";
import { Button } from "../ui/button";

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
    <Button
      variant={isRunning ? "destructive" : "default"}
      onClick={handleClick}
      className="hover:animate-pulse hover:text-xl border h-full w-full col-span-12 sm:col-span-4 grid place-items-center rounded"
    >
      {isRunning ? `Terminar turno (${formatElapsed(elapsed)})` : "Iniciar turno"}
    </Button>
  );
}
