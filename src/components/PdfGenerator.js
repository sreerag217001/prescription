import React from 'react'
import { useRef } from 'react';
import jsPDF from 'jspdf';
const PdfGenerator = ({ content }) => {
    const buttonRef = useRef(null);
  
    const generatePDF = () => {
      const pdf = new jsPDF();
      pdf.text('Generated PDF Example', 20, 20);
      pdf.text('-'.repeat(40), 20, 30);
  
      content.forEach((line, index) => {
        pdf.text(line, 20, 40 + index * 10);
      });
  
      pdf.save('generated_pdf_example.pdf');
    };
  
    return (
      <div>
        <button className='bg-red-300 font-bold hover:bg-red-700 text-white px-3 rounded-sm'ref={buttonRef} onClick={generatePDF}>
          Generate PDF
        </button>
      </div>
    );
  };

export default PdfGenerator
