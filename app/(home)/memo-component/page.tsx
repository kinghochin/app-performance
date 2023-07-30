'use client'
import { useState } from 'react';
import SlowComponent, { MemoSlowComponent } from '../../components/SlowComponent/SlowComponent';

export default function MemoComponent() {
  const title = 'Render a slow component';
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
	<>
		<h1>Slow Component</h1>
	    <SlowComponent title={title} />
	    <h1>Memo Component</h1>
	    <MemoSlowComponent title={title} />
		<div>
          Count: {count}
          <button onClick={increment}> + </button>
      </div>
	</>
  )
}