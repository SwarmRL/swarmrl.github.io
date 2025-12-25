import { useEffect, useRef } from "react";

interface Boid {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function SwarmBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Initialize boids
    const boids: Boid[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
    }));

    function update() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Draw connections first (background layer)
      ctx.strokeStyle = "rgba(56, 189, 248, 0.15)";
      ctx.lineWidth = 1;
      
      for (let i = 0; i < boids.length; i++) {
        const bi = boids[i];
        // Move
        bi.x += bi.vx;
        bi.y += bi.vy;

        // Wrap
        if (bi.x < 0) bi.x = width;
        if (bi.x > width) bi.x = 0;
        if (bi.y < 0) bi.y = height;
        if (bi.y > height) bi.y = 0;

        // Connect
        for (let j = i + 1; j < boids.length; j++) {
            const bj = boids[j];
            const dx = bi.x - bj.x;
            const dy = bi.y - bj.y;
            const distSq = dx * dx + dy * dy;
            
            // Connect if close (distance < 120 approx)
            if (distSq < 15000) {
                // Opacity based on distance
                const alpha = 1 - Math.sqrt(distSq) / 125;
                if (alpha > 0) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.4})`;
                    ctx.moveTo(bi.x, bi.y);
                    ctx.lineTo(bj.x, bj.y);
                    ctx.stroke();
                }
            }
        }
      }

      // Draw boids dots
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      for (const b of boids) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(update);
    }

    const animationId = requestAnimationFrame(update);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
}

