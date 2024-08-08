// CircuitBoardCanvas.js
import React, { useRef, useEffect } from 'react';

const CircuitBoardCanvas = () => {
  const canvasRef = useRef(null);

  const drawCircuit = (ctx) => {
    // Clear the canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Basic circuit-like pattern for demonstration
    ctx.beginPath();
    ctx.strokeStyle = '#0f0'; // Green color for the circuit lines
    ctx.lineWidth = 2;
    for (let i = 0; i < 10; i++) { // Drawing 10 lines as an example
      const startX = Math.random() * ctx.canvas.width;
      const startY = Math.random() * ctx.canvas.height;
      const endX = Math.random() * ctx.canvas.width;
      const endY = Math.random() * ctx.canvas.height;
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
    }
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Resize the canvas to fill the container
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      drawCircuit(context);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial resize and draw

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />;
};

export default CircuitBoardCanvas;