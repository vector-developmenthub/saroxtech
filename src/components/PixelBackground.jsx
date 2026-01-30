// src/components/PixelBackground.jsx
import { useEffect, useRef } from "react";

function PixelBackground({ 
  waveSpeed = 1, 
  pixelSize = 12, 
  pixelSpacing = 16,
  perlinScale = 0.15,
  sizeMin = 0.01,           // minimālais izmērs (5%)
  noiseThresholdMin = 0.3,  // tikai virs 0.3 perlin
  alphaMultiplier = 0.6     // **JAUNS: alpha stiprums**
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let frameSkip = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const cols = Math.ceil(canvas.width / pixelSpacing);
    const rows = Math.ceil(canvas.height / pixelSpacing);
    
    const grid = [];
    for (let y = 0; y < rows; y++) {
      grid[y] = [];
      for (let x = 0; x < cols; x++) {
        grid[y][x] = {
          seedX: x * perlinScale * 3,
          seedY: y * perlinScale * 3,
          phaseOffset: Math.random() * Math.PI * 2,
        };
      }
    }

    let time = 0;

    const render = () => {
      frameSkip++;
      if (frameSkip % 2 !== 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const t = time * 0.018 * waveSpeed;
      
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const cell = grid[y][x];
          
          // **PERLIN NOISE 0-1**
          let noise = 0;
          let amplitude = 1;
          
          const nx1 = t + cell.seedX * 0.12;
          const ny1 = t * 0.9 + cell.seedY * 0.12;
          noise += (Math.sin(nx1) * Math.cos(ny1) + 1) * 0.5 * amplitude;
          
          amplitude *= 0.45;
          const nx2 = t * 1.1 + cell.seedX * 0.24;
          const ny2 = t * 0.8 + cell.seedY * 0.24;
          noise += (Math.sin(nx2) * Math.cos(ny2) + 1) * 0.5 * amplitude;
          
          amplitude *= 0.4;
          const nx3 = t * 1.3 + cell.seedX * 0.48;
          const ny3 = t * 0.7 + cell.seedY * 0.48;
          noise += (Math.sin(nx3) * Math.cos(ny3) + 1) * 0.5 * amplitude;

          // **INVERTĒ PERLIN** - tikai virs 0.3
          const invertedNoise = 1.0 - noise;
          
          if (invertedNoise >= noiseThresholdMin) {
            // **MAPĒT UZ sizeMin-1.0**
            const normalizedSize = (invertedNoise - noiseThresholdMin) / (1.0 - noiseThresholdMin);
            const sizeMultiplier = sizeMin + (1.0 - sizeMin) * normalizedSize;
            const finalSize = pixelSize * sizeMultiplier;

            // **DYNAMIC ALPHA pēc izmēra**
            const sizeAlpha = Math.pow(sizeMultiplier, alphaMultiplier);
            const finalAlpha = 0.15 + sizeAlpha * 0.8; // 0.15-0.95

            const px = x * pixelSpacing + pixelSpacing * 0.5;
            const py = y * pixelSpacing + pixelSpacing * 0.5;

            ctx.save();
            ctx.globalAlpha = finalAlpha;  // **APTUMŠOŠANĀS**
            
            ctx.fillStyle = `hsl(140, 85%, 42%)`;
            ctx.shadowColor = `hsla(140, 85%, 42%, ${finalAlpha * 0.8})`;
            ctx.shadowBlur = 8 * sizeAlpha;
            
            ctx.fillRect(px - finalSize/2, py - finalSize/2, finalSize, finalSize);
            ctx.restore();
          }
        }
      }

      time += 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [waveSpeed, pixelSize, pixelSpacing, perlinScale, sizeMin, noiseThresholdMin, alphaMultiplier]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        filter: "blur(0.6px) contrast(1.5)",
        opacity: 0.9,
      }}
    />
  );
}

export default PixelBackground;
