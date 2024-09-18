"use client"
import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
const App = () => {
  return <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">

<div
    style={{
        
        border: '1px solid rgba(0, 0, 0, 0.3)',
        height: '90vh',
        width:'800px'
    }}
>
    <Viewer fileUrl="/1.pdf" />
</div>
  </Worker>;
};


export default App;