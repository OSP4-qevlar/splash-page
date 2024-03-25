import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/dark.css';

import '../../src/App.css';
import '../../src/index.css';

const TestInteractive = () => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, []);

  return (
    <section className='bg-dark text-white p-6'>
      <div className='max-w-2xl mx-auto'>
        <h2 className='text-4xl font-bold mb-4 text-center'>
          Customize Qevlar from a Single Configuration File
        </h2>
        <p className='text-base mb-6 text-center'>
          Just input information about your API and configuration information
          related to different tests you would like to run, and our library will
          adapt.
        </p>
        <div className='bg-gray-700 p-4 rounded-lg shadow'>
          <img
            src='https://i.ibb.co/M84F7hC/qevlar-config-snippet-nobg.webp'
            alt='Qevlar Configuration'
            className='max-w-full h-auto'
          />
        </div>
      </div>
    </section>
  );
};

export default TestInteractive;
