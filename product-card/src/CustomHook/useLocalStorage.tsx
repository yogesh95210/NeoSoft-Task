  import { useState, useEffect } from "react";

  export function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(initialValue);
    const [ready, setReady] = useState(false);

    useEffect(() => {
      try {
        const stored = window.localStorage.getItem(key);
        if (stored !== null) setValue(JSON.parse(stored) as T);
      } finally {
        setReady(true);
      }
    }, [key]);

    useEffect(() => {
      if (!ready) return;
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value, ready]);

    return { value, setValue, ready } as const;
  }
