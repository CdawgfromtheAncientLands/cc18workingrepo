import React from 'react';

const UploadButton = () => {
  const handleUpload = () => {
    alert("Image Uploaded");
  };

  return <button onClick={handleUpload}>Upload Image</button>;
};

export default UploadButton;