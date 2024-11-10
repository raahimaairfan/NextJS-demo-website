"use client"; 

import { useEffect, useState } from 'react';

export default function Loading() {
  const messages = [
    "Hang tight, almost there!"
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-grey">
      <div className="flex items-center justify-center mb-4">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-300 border-solid"></div>
      </div>
      {/* Rotating loading message */}
      <p className="text-lg text-gray-600">{currentMessage}</p>
    </div>
  );
}
