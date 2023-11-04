'use client';
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { FaPaste, FaXmark } from 'react-icons/fa6';
import Image from 'next/image';

const ImageToPdf = () => {
  const [images, setImages] = useState<string[]>([]);
  const [text, setText] = useState<string>('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageArray: string[] = [];
      for (let i = 0; i < files.length; i++) {
        imageArray.push(URL.createObjectURL(files[i]));
      }
      setImages(imageArray);
    }
  };

  const handleConvertToPdf = async () => {
    if (images.length > 0) {
      const pdf = new jsPDF();
      const lines = text.split('\n');
      let y = 10;
      for (let line of lines) {
        pdf.text(line, 10, y);
        y += 10;
      }
      y += 10;
      for (let i = 0; i < images.length; i++) {
        let img = new window.Image();
        img.src = images[i];
        await new Promise<void>((resolve) => {
          img.onload = () => resolve();
        });
        let imgWidth = 190;
        let imgHeight = (img.naturalHeight * imgWidth) / img.naturalWidth;
        if (y + imgHeight > pdf.internal.pageSize.height) {
          pdf.addPage();
          y = 0;
        }
        pdf.addImage(images[i], 'JPEG', 10, y, imgWidth, imgHeight);
        y += imgHeight;
      }
      pdf.save('converted.pdf');
    } else {
      alert('Please upload at least one image before converting.');
    }
  };

  function handleRemoveImage(index: number): void {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 bg-card rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
        <h2 className="text-2xl font-bold mb-5 text-fontb text-center ">Multiple Image to PDF Converter</h2>
        <div className="flex flex-col w-full mt-4">
          <textarea value={text} onChange={handleTextChange} className="mb-5 p-2 border border-gray-300 rounded-md text-black" />
        </div>
        <input type="file" accept="image/*" multiple onChange={handleImageChange} className="mb-5 p-2 border border-gray-300 rounded-md text-font" />
        <button onClick={handleConvertToPdf} className="mb-5 p-2 bg-blue-500 rounded-md">
          Convert to PDF
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5 bg-card rounded-lg shadowpx-4 py-8 sm:px-6 md:px-8 lg:px-10 lg:grid-cols-6">
        {images.map((image, index) => (
          <div key={index} className="w-32 h-32 relative">
            <Image src={image} alt={`Image ${index + 1}`} className="object-cover rounded-md w-full h-full" width={128} height={128} />
            <div className="absolute top-0 right-0 cursor-pointer" onClick={() => handleRemoveImage(index)}>
              <FaXmark className="w-6 h-6 stroke-red-500 hover:stroke-red-600 fill-red-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageToPdf;
