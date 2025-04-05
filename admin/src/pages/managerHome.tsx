import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ButtonAdd from '../ui/btnAdd';
import '../assets/styles/managerHome.scss';

const ManagerHome: React.FC = () => {
  const [images, setImages] = useState<{ url: string; public_id: string }[]>([]);

  useEffect(() => {
    const storedImages = localStorage.getItem('images');
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    }
  }, []);

  const handleUpload = (img: { url: string; public_id: string }) => {
    const updatedImages = [...images, img];
    setImages(updatedImages);

    localStorage.setItem('images', JSON.stringify(updatedImages));
  };

  const handleDelete = async (public_id: string) => {
    try {
      await axios.post('http://localhost:3001/delete-image', { public_id });

      const updatedImages = images.filter(img => img.public_id !== public_id);
      setImages(updatedImages);

      localStorage.setItem('images', JSON.stringify(updatedImages));
    } catch (error) {
      console.error('Xóa ảnh thất bại', error);
    }
  };

  return (
    <div className="mngHome">
      <div className="flex gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="card">
            <img src={img.url} alt={`upload-${idx}`} />
            <button
              onClick={() => handleDelete(img.public_id)}
              className="delete-btn"
              title="Xóa ảnh"
            >
              −
            </button>
          </div>
        ))}
      </div>
      <div className="btn-add">
        <ButtonAdd onImageUpload={handleUpload} />
      </div>
    </div>
  );
};

export default ManagerHome;
