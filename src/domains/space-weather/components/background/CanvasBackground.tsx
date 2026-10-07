import React, { useEffect, useRef } from 'react';

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };
    window.addEventListener('resize', handleResize);

    // Star configuration
    interface Star {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speed: number;
    }
    const stars: Star[] = [];
    const numStars = 180;

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.4 + 0.2,
          alpha: Math.random() * 0.7 + 0.3,
          speed: 0.3 + Math.random() * 0.7,
        });
      }
    };
    initStars();

    // Meteor configuration
    interface Meteor {
      x: number;
      y: number;
      length: number;
      speed: number;
      alpha: number;
      angle: number;
    }
    const meteors: Meteor[] = [];

    const createMeteor = () => {
      const x = Math.random() * width;
      const y = Math.random() * (height * 0.4);
      meteors.push({
        x,
        y,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 6,
        alpha: 1,
        angle: Math.PI / 4,
      });
    };

    let meteorTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render stars with gentle mouse parallax
      const offsetX = mousePos.current.x * 25;
      const offsetY = mousePos.current.y * 25;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.y -= star.speed * 0.4;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        const drawX = star.x + offsetX * (star.radius / 1.5);
        const drawY = star.y + offsetY * (star.radius / 1.5);

        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(216, 236, 249, ${star.alpha * 0.8})`;
        ctx.fill();
      }

      // Occasional gentle meteor streak
      meteorTimer++;
      if (meteorTimer > 280) {
        if (Math.random() < 0.3) {
          createMeteor();
        }
        meteorTimer = 0;
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= 0.015;

        if (m.alpha <= 0 || m.x > width || m.y > height) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, 'rgba(0, 168, 255, 0)');
        grad.addColorStop(1, `rgba(216, 236, 249, ${m.alpha})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      aria-hidden="true"
    />
  );
}
