'use client';
import React, { useState, useEffect, useRef } from 'react';

export const SlowComponent: React.FC<{ title: string }> = ({ title }) => {
  const [data, setData] = useState('Rendering...');
  const isRendering = useRef(false);

  const fetchData = () => {
    isRendering.current = true;
    setData(`Rerendering ... `);
    setTimeout(() => {
      setData(`Loaded Slow component: ${title}`);
    }, 2000); 
  };

  useEffect(() => {
    if (data.includes('Loaded')) isRendering.current = false;
  }, [data]);

  if (!isRendering.current) fetchData();

  return (
    <div>
      {data ? (
        <p>{data}</p>
      ) : (
        <p>Loading slow component data...</p>
      )}
    </div>
  );
};

export default SlowComponent; // Without Memo

export const MemoSlowComponent = React.memo(SlowComponent); // Applying Memo
