"use client";

import { useEffect, useRef, useState } from "react";

const create = (): Worker => {
  return new Worker(new URL("../worker.ts", import.meta.url));
};

export default function FromWorker() {
  const [message, setMessage] = useState<string>("");
  const workerRef = useRef<Worker | null>(null);
  // useEffect(() => {
  //   const worker = new Worker(new URL("../worker.ts", import.meta.url));
  //   workerRef.current = worker;

  //   return () => {
  //     worker.terminate();
  //     workerRef.current = null;
  //   };
  // }, []);
  return <div>{message || "..."}</div>;
}
