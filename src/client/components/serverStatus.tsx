import { useEffect, useState } from "react";

export const ServerStatus = () => {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setMsg(data));
  }, []);

  return (
    <>
      <h1>Server Status</h1>
      <h3 className="text-center text-green-400">{msg}</h3>
    </>
  );
};
