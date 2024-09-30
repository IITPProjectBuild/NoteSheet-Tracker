// "use client"
import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
export default function App({ data }) {
  return <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
    <div
      style={{
          border: '1px solid rgba(0, 0, 0, 0.3)',
          height: '80vh',
          width: '800px'
      }}
    >
      <Viewer fileUrl={`/pdfStore/${data.title}_${data.id}.pdf`} />
    </div>
  </Worker>;
}