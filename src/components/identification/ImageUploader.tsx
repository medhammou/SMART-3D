import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

interface Props {
  onImageUpload: (file: File) => void;
}

export const ImageUploader: React.FC<Props> = ({ onImageUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onImageUpload(acceptedFiles[0]);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
        ${isDragActive 
          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/10' 
          : 'border-gray-300 dark:border-gray-600 hover:border-primary-500'}`}
    >
      <input {...getInputProps()} />
      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
      <p className="text-gray-600 dark:text-gray-300">
        {isDragActive
          ? 'Déposez l\'image ici...'
          : 'Glissez-déposez une image ou cliquez pour sélectionner'}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        JPG, JPEG ou PNG
      </p>
    </div>
  );
};