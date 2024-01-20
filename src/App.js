import React from 'react';
import PdfGenerator from './components/PdfGenerator';

const App = () => {
  const pdfContent = [
    'This is line 1 of the PDF.',
    'This is line 2 of the PDF.',
    'This is line 3 of the PDF.',
  ];

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-black '>
      <div>
      <h1 className='text-white'>Click below 👇 to generate pdf</h1>
      </div>
     
      <div className='mt-5'>
      <PdfGenerator content={pdfContent} />
      </div>
    
    </div>
  );
};

export default App;
