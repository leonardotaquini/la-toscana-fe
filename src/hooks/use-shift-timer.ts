import * as React from "react";

const STORAGE_KEY = "shift_start";

export function useShiftTimer() {
  const [start, setStart] = React.useState<number | null>(null);
  const [elapsed, setElapsed] = React.useState(0);

  React.useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored) {
      const value = parseInt(stored, 10);
      if (!isNaN(value)) {
        setStart(value);
      }
    }
  }, []);

  React.useEffect(() => {
    let interval: number | undefined;
    if (start !== null) {
      const update = () => setElapsed(Date.now() - start);
      update();
      interval = window.setInterval(update, 1000);
    }
    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, [start]);

  const startTimer = React.useCallback(() => {
    const now = Date.now();
    localStorage.setItem(STORAGE_KEY, String(now));
    setStart(now);
  }, []);

  const stopTimer = React.useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setStart(null);
    setElapsed(0);
  }, []);

  return {
    start,
    elapsed,
    isRunning: start !== null,
    startTimer,
    stopTimer,
  };
}

export function formatElapsed(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds]
    .map((n) => String(n).padStart(2, "0"))
    .join(":");
}
