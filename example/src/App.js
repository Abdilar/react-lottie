import React from 'react';

import Lottie from '@sakit-sa/react-lottie';
import '@sakit-sa/react-lottie/dist/index.css';
import anim from './anim';

const App = () => {
  return (
    <div>
      <Lottie data={anim} />
    </div>
  )
}

export default App
