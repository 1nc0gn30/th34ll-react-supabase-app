import React, { useEffect, useRef } from 'react';
import './MatrixGlitch.css'; // Update CSS file name if changed

const MatrixGlitch = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const numberOfParticles = 100; // Adjust for more or less density

    // Particle colors: soft, pastel-like to reduce strain
    const colors = ['#a1ffce', '#faffb8', '#acefff', '#ffb5e8'];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1; // Particle size
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    }

    function handleEdges(particle) {
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX *= -1;
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY *= -1;
      }
      if (particle.size < 0.1) {
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
        particle.size = Math.random() * 5 + 1;
        particle.speedX = Math.random() * 3 - 1.5;
        particle.speedY = Math.random() * 3 - 1.5;
      }
    }

    function animate() {
      ctx.fillStyle = 'rgba(18, 18, 18, 0.1)'; // Slightly clear canvas for trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        handleEdges(particles[i]);
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();
  }, []);

  return <canvas ref={canvasRef} className="matrix-glitch"></canvas>;
};

export default MatrixGlitch;
