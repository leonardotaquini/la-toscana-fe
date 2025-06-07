import * as React from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = React.useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStoredValue = React.useCallback(
    (val: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const valueToStore = val instanceof Function ? val(prev) : val;
        try {
          if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
          }
        } catch {}
        return valueToStore;
      });
    },
    [key]
  );

  return [value, setStoredValue] as const;
}
