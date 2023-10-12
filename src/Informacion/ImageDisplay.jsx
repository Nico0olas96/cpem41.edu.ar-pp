import React, { useEffect, useState } from 'react';

const ImageDisplay = ({ imagen }) => {
  
  const [imageDataUrl, setImageDataUrl] = useState(null);

  useEffect(() => {
  
    // Convierte los datos de búfer en una URL de datos
    if (imagen) {

      const arrayBufferView = new Uint8Array(imagen.data);

      const blob = new Blob([arrayBufferView], { type: 'image/jpeg' });

      const imageUrl = URL.createObjectURL(blob);

      setImageDataUrl(imageUrl);
      
    }


  }, [imagen]);


  return (
    <div>
    
      <img src={imageDataUrl} className='Informacion_2_img' alt='' />

    </div>
  );
};

export default ImageDisplay;
