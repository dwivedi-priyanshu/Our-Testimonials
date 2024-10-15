import './index.css'

import reviews from './data';
import Testimonial from './Components/Testimonial';

function App() {
  return (
    <div className='flex  w-[100vw] h-[100vh] items-center justify-center bg-gray-200 text-center'>
      <div className='flex flex-col '>
        <h1 className='text-4xl font-bold' >Our Testimonials</h1>
        <div className='bg-violet-400 h-[4px] mx-auto w-1/5 mt-1'></div>
        <Testimonial reviews={reviews} />
      </div>

    </div>
  );
}

export default App;
