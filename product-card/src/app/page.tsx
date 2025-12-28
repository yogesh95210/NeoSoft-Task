"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { useLocalStorage } from "@/CustomHook/useLocalStorage"; 

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { value: name, setValue: setName, ready } = useLocalStorage<string>("Key", "");
  const [draft, setDraft] = useState("");

  useEffect(() => {
    setMounted(true);
    setDraft(name);
  }, [name]);

  if (!mounted) return null;        // <-- server + client render the same (empty)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setDraft(e.target.value);
  }

  function handleSubmit() {
    setName(draft);                 // saved only on click
  }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col gap-4 items-center justify-center p-4">
      <h2 className="text-xl font-bold">Local Storage</h2>

      <input
        value={draft}
        onChange={handleChange}
        className="border px-3 py-2 rounded"
      />

      <button onClick={handleSubmit} className="border px-4 py-2 rounded bg-white shadow">
        Submit
      </button>

      <p>Saved value: {name || "—"}</p>
    </main>
  );
}
