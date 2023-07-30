'use client'
import { Suspense, lazy, useState } from 'react';
const LargeComponent = lazy(() => import('../../components/LargeComponent/LargeComponent'));

export default function CodeSplit() {
  const [isShow, setIsShow] = useState(false);  
  const showImage = () => {
    setIsShow(true);
  };
  return (
	<>
	  <h1>Code Split</h1>
	  <Suspense fallback={<div>Loading...</div>}>
	    {!isShow &&
	      <div>
	  	  <h3>Load the Slow Component only when required</h3>
	  	  <button onClick={showImage}>Load Component</button>
	  	</div>
	    }
	    {!!isShow && <LargeComponent />}
	  </Suspense>
	</>
  )
}