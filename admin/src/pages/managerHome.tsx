import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ButtonAdd from '../ui/btnAdd';
import Swal from 'sweetalert2';
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
    Swal.fire({
      title: 'Tải ảnh thành công!',
      icon: 'success',
      confirmButtonText: 'OK',
      timer: 2000,
      draggable: true,
    });
  };

  const handleDelete = async (public_id: string) => {
    try {
      await axios.post('http://localhost:3001/delete-image', { public_id });

      const updatedImages = images.filter(img => img.public_id !== public_id);
      setImages(updatedImages);

      localStorage.setItem('images', JSON.stringify(updatedImages));
      Swal.fire({
        title: 'Xóa ảnh thành công!',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 2000,
        draggable: true,
      });
    } catch (error) {
      Swal.fire({
        title: 'Xóa ảnh thất bại!',
        icon: 'error',
        confirmButtonText: 'OK',
        timer: 2000,
        draggable: true,
      });
    }
  };

  return (
    <div className='realtive'>
      
      <div className="mngHome">
      <h1 className='w-full bg-white z-10 text-4xl font-bold text-center py-2 sticky top-0'>Quản lí home</h1>
        <div className="flex gap-4 p-2 flex-wrap z-0">
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
        <div className="absolute right-8 bottom-8">
          <ButtonAdd onImageUpload={handleUpload} />
        </div>
      </div>
    </div>
  );
};

export default ManagerHome;
