import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import '../assets/styles/managerHome.scss';
import ButtonAddImg from '../ui/btnAddImg';

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
    const result = await Swal.fire({
      title: "Bạn chắc chắn muốn xóa?",
      text: "Hành động này không thể hoàn tác!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa!",
      cancelButtonText: "Hủy"
    });
  
    if (result.isConfirmed) {
      try {
        const token = sessionStorage.getItem('token');
        await axios.delete('http://localhost:3001/delete-image', {
          data: { public_id },
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        const updatedImages = images.filter(img => img.public_id !== public_id);
        setImages(updatedImages);
  
        localStorage.setItem('images', JSON.stringify(updatedImages));
        Swal.fire({
          title: 'Xóa ảnh thành công!',
          icon: 'success',
          confirmButtonText: 'OK',
          timer: 2000,
        });
      } catch (error) {
        Swal.fire({
          title: 'Xóa ảnh thất bại!',
          icon: 'error',
          confirmButtonText: 'OK',
          timer: 2000,
        });
      }
    }
  };
  


  return (
    <div className='realtive'>
      <div className="mngHome">
        <h1 className='w-full bg-white z-10 text-2xl font-bold text-center py-2 sticky top-0'>Quản lí home</h1>
        <div className="flex gap-4 p-2 flex-wrap z-0">
          {images.length === 0 ? (
            <p className="w-full text-center py-4">Chưa có ảnh nào</p>
          ) : (
            images.map((img, idx) => (
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
            ))
          )}
        </div>
        <div className="absolute right-8 bottom-8">
          <ButtonAddImg onImageUpload={handleUpload} />
        </div>
      </div>
    </div>
  );
};

export default ManagerHome;
