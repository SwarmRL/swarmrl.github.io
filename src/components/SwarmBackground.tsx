import { useEffect, useRef, useState } from "react";

interface Boid {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function SwarmBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDark, setIsDark] = useState(true);

  // Theme detection
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Simulation params
    const BOID_COUNT = 150;
    const VISUAL_RANGE = 80;
    const VISUAL_RANGE_SQ = VISUAL_RANGE * VISUAL_RANGE;
    const SEPARATION_DIST = 25;
    const SEPARATION_DIST_SQ = SEPARATION_DIST * SEPARATION_DIST;
    const SPEED_LIMIT = 2.5;
    const MIN_SPEED = 1.5;
    
    // Forces
    const COHERENCE_FACTOR = 0.005; // Pull to center
    const ALIGNMENT_FACTOR = 0.03;  // Match velocity
    const SEPARATION_FACTOR = 0.04; // Avoid crowding
    
    // Mouse
    const mouse = { x: -1000, y: -1000 };
    const MOUSE_RADIUS = 150;
    const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS;

    // Initialize boids
    const boids: Boid[] = Array.from({ length: BOID_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }));

    function update() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Colors based on theme
      const particleColor = isDark ? "rgba(255, 255, 255, 0.5)" : "rgba(15, 23, 42, 0.4)";
      const lineColor = isDark ? "rgba(56, 189, 248, 0.15)" : "rgba(2, 132, 199, 0.1)";

      // Update boids
      for (let i = 0; i < boids.length; i++) {
        const b = boids[i];
        
        // Flocking variables
        let centerX = 0, centerY = 0; // Cohesion
        let avgVx = 0, avgVy = 0;     // Alignment
        let sepX = 0, sepY = 0;       // Separation
        let numNeighbors = 0;

        for (let j = 0; j < boids.length; j++) {
            if (i === j) continue;
            const other = boids[j];
            const dx = b.x - other.x;
            const dy = b.y - other.y;
            const distSq = dx*dx + dy*dy;

            if (distSq < VISUAL_RANGE_SQ) {
                // Cohesion accumulator
                centerX += other.x;
                centerY += other.y;
                
                // Alignment accumulator
                avgVx += other.vx;
                avgVy += other.vy;

                // Separation accumulator
                if (distSq < SEPARATION_DIST_SQ) {
                    sepX += dx / distSq;
                    sepY += dy / distSq;
                }
                
                numNeighbors++;

                // Draw lines ONLY if very close (constellation reduction)
                if (distSq < 1600) { // < 40px
                    ctx.beginPath();
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 0.5; // Very thin
                    ctx.moveTo(b.x, b.y);
                    ctx.lineTo(other.x, other.y);
                    ctx.stroke();
                }
            }
        }

        if (numNeighbors > 0) {
            // Cohesion
            centerX /= numNeighbors;
            centerY /= numNeighbors;
            b.vx += (centerX - b.x) * COHERENCE_FACTOR;
            b.vy += (centerY - b.y) * COHERENCE_FACTOR;

            // Alignment
            avgVx /= numNeighbors;
            avgVy /= numNeighbors;
            b.vx += (avgVx - b.vx) * ALIGNMENT_FACTOR;
            b.vy += (avgVy - b.vy) * ALIGNMENT_FACTOR;

            // Separation (weighting factor needs to be higher because of 1/distSq)
            b.vx += sepX * 10 * SEPARATION_FACTOR; 
            b.vy += sepY * 10 * SEPARATION_FACTOR;
        }

        // Mouse Repulsion
        const mDx = b.x - mouse.x;
        const mDy = b.y - mouse.y;
        const mDistSq = mDx*mDx + mDy*mDy;
        if (mDistSq < MOUSE_RADIUS_SQ) {
             const force = (MOUSE_RADIUS_SQ - mDistSq) / MOUSE_RADIUS_SQ; // 0 to 1
             b.vx += (mDx / Math.sqrt(mDistSq)) * force * 1.5;
             b.vy += (mDy / Math.sqrt(mDistSq)) * force * 1.5;
        }

        // Speed limit
        const speed = Math.sqrt(b.vx*b.vx + b.vy*b.vy);
        if (speed > SPEED_LIMIT) {
            b.vx = (b.vx / speed) * SPEED_LIMIT;
            b.vy = (b.vy / speed) * SPEED_LIMIT;
        } else if (speed < MIN_SPEED) {
            b.vx = (b.vx / speed) * MIN_SPEED;
            b.vy = (b.vy / speed) * MIN_SPEED;
        }

        // Move
        b.x += b.vx;
        b.y += b.vy;

        // Wrap edges
        if (b.x < 0) b.x = width;
        if (b.x > width) b.x = 0;
        if (b.y < 0) b.y = height;
        if (b.y > height) b.y = 0;

        // Draw Particle
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(b.x, b.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(update);
    }

    const animationId = requestAnimationFrame(update);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
        // Since canvas is fixed to viewport
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{ pointerEvents: 'none' }} 
    />
  );
}
