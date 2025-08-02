import React from 'react';
import { Code, Database, Globe, Cpu, Zap, Layers } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: Code, delay: '0s', duration: '20s', x: '10%', y: '20%' },
    { Icon: Database, delay: '2s', duration: '25s', x: '80%', y: '10%' },
    { Icon: Globe, delay: '4s', duration: '30s', x: '15%', y: '70%' },
    { Icon: Cpu, delay: '6s', duration: '22s', x: '85%', y: '60%' },
    { Icon: Zap, delay: '8s', duration: '28s', x: '50%', y: '15%' },
    { Icon: Layers, delay: '10s', duration: '26s', x: '70%', y: '80%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map(({ Icon, delay, duration, x, y }, index) => (
        <div
          key={index}
          className="absolute opacity-10 text-purple-400"
          style={{
            left: x,
            top: y,
            animation: `float ${duration} ${delay} infinite ease-in-out`,
          }}
        >
          <Icon className="w-8 h-8" />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;