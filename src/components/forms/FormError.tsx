import React from 'react';

interface FormErrorProps {
  message: string;
}

export function FormError({ message }: FormErrorProps) {
  return message ? (
    <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
      {message}
    </div>
  ) : null;
}