import React, { useEffect, useState } from "react";

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, input, textarea, [data-cursor="pointer"]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${
            mousePosition.y - 12
          }px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />

      {/* Cursor trail */}
      <div
        className="fixed top-0 left-0 w-6 h-6 border-2 border-purple-400 rounded-full pointer-events-none z-40 transition-all duration-300 ease-out opacity-50"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${
            mousePosition.y - 16
          }px) scale(${isHovering ? 2 : 1})`,
        }}
      />
    </>
  );
};

export default CursorEffect;
