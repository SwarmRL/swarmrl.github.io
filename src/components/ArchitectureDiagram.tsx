import { useEffect, useState } from 'react';

export default function ArchitectureDiagram() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 my-8">
      <svg viewBox="0 0 800 400" className="w-full h-auto font-sans">
        {/* Definitions for markers */}
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#38bdf8" />
          </marker>
        </defs>

        {/* Environment block */}
        <g transform="translate(50, 150)">
          <rect 
            x="0" y="0" width="200" height="100" rx="8" 
            fill={isDark ? "rgba(255,255,255,0.05)" : "#e2e8f0"}
            stroke={isDark ? "rgba(255,255,255,0.2)" : "#94a3b8"}
            strokeWidth="2" 
          />
          <text 
            x="100" y="45" textAnchor="middle" 
            fill={isDark ? "#f1f5f9" : "#0f172a"}
            fontSize="18" fontWeight="bold"
          >
            Environment
          </text>
          <text 
            x="100" y="70" textAnchor="middle" 
            fill={isDark ? "#cbd5e1" : "#475569"}
            fontSize="14"
          >
            (EspressoMD / Custom)
          </text>
        </g>

        {/* Agents block */}
        <g transform="translate(550, 150)">
          <rect 
            x="0" y="0" width="200" height="100" rx="8" 
            fill="rgba(56,189,248,0.1)" 
            stroke={isDark ? "rgba(56,189,248,0.4)" : "#7dd3fc"}
            strokeWidth="2" 
          />
          <text 
            x="100" y="45" textAnchor="middle" 
            fill={isDark ? "#f1f5f9" : "#0f172a"}
            fontSize="18" fontWeight="bold"
          >
            Agents
          </text>
          <text 
            x="100" y="70" textAnchor="middle" 
            fill="#38bdf8"
            fontSize="14"
          >
            (JAX / Flax)
          </text>
        </g>

        {/* State arrow (top) */}
        <path 
          d="M 250 150 C 350 50, 450 50, 550 150" 
          fill="none" 
          stroke={isDark ? "rgba(255,255,255,0.4)" : "#94a3b8"}
          strokeWidth="2" 
          markerEnd="url(#arrow)" 
        />
        <rect 
          x="300" y="60" width="200" height="30" rx="4" 
          fill={isDark ? "rgba(0,0,0,0.8)" : "#1e293b"}
        />
        <text 
          x="400" y="80" textAnchor="middle" 
          fill="#f1f5f9"
          fontSize="14" 
          fontFamily="monospace"
        >
          State / Observation
        </text>

        {/* Action arrow (bottom) */}
        <path 
          d="M 550 250 C 450 350, 350 350, 250 250" 
          fill="none" 
          stroke={isDark ? "rgba(255,255,255,0.4)" : "#94a3b8"}
          strokeWidth="2" 
          markerEnd="url(#arrow)" 
        />
        <rect 
          x="300" y="300" width="200" height="30" rx="4" 
          fill={isDark ? "rgba(0,0,0,0.8)" : "#1e293b"}
        />
        <text 
          x="400" y="320" textAnchor="middle" 
          fill="#f1f5f9"
          fontSize="14" 
          fontFamily="monospace"
        >
          Action / Forces
        </text>
      </svg>
    </div>
  );
}
