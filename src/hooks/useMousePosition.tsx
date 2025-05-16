import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    });
    return () => {
      window.removeEventListener("mousemove", () => {
        setMousePosition({ x: 0, y: 0 });
      });
    };
  });

  return mousePosition;
}
