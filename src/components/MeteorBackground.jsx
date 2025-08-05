import { useRef, useEffect } from "react";

export default function MeteorBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let meteors = [];
    const meteorCount = 20;
    let animationId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function createMeteor() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.7,
        length: 80 + Math.random() * 40,
        speed: 4 + Math.random() * 2,
        angle: Math.PI / 4, // 45 degrees
        alpha: 0.5 + Math.random() * 0.5,
      };
    }

    meteors = Array.from({ length: meteorCount }, createMeteor);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let m of meteors) {
        ctx.save();
        ctx.globalAlpha = m.alpha;
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(
          m.x - m.length * Math.cos(m.angle),
          m.y + m.length * Math.sin(m.angle)
        );
        ctx.stroke();
        ctx.restore();

        m.x += m.speed;
        m.y += m.speed;
        if (m.x > canvas.width || m.y > canvas.height) {
          Object.assign(m, createMeteor());
          m.x = -m.length;
          m.y = Math.random() * canvas.height * 0.7;
        }
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}