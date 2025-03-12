import { useEffect, useRef } from 'react';
import * as fabric from 'fabric';

const DiaryCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 500,
      height: 500,

    });

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <canvas ref={canvasRef} className='border border-black' />
    </div>
  );
};

export default DiaryCanvas;