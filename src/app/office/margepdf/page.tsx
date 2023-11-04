'use client';
import React from 'react';
import { PDFDocument } from 'pdf-lib';
import { saveAs } from 'file-saver';

const MargePdf = () => {
  const [pdf, setPdf] = React.useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const pdfArray: File[] = [];
      for (let i = 0; i < files.length; i++) {
        pdfArray.push(files[i]);
      }
      setPdf(pdfArray);
    } else {
      alert('Please upload at least one image before converting.');
    }
  };

  const handleConvertToPdf = async () => {
    const pdfDoc = await PDFDocument.create();

    for (let i = 0; i < pdf.length; i++) {
      const pdfBytes = await pdf[i].arrayBuffer();
      const existingPdfDoc = await PDFDocument.load(pdfBytes);

      const pageIndices = Array.from(existingPdfDoc.getPageIndices());
      const copiedPages = await pdfDoc.copyPages(existingPdfDoc, pageIndices);
      copiedPages.forEach((page: any) => pdfDoc.addPage(page));
    }

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    saveAs(blob, 'merged.pdf');
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <input type="file" accept="application/pdf" onChange={handleImageChange} multiple />
        <button onClick={handleConvertToPdf}>Marge Pdf</button>
      </div>
    </>
  );
};

export default MargePdf;
