import React, { useRef } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import API_HOME_CLOUD from '../api/upImgCloud';
interface ButtonAddProps {
  onImageUpload: (img: { url: string; public_id: string }) => void;
}

const ButtonAddImg: React.FC<ButtonAddProps> = ({ onImageUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const token = sessionStorage.getItem('token');
    if (!token) {
      Swal.fire({
        title: "Lỗi",
        text: "Bạn chưa đăng nhập hoặc phiên làm việc đã hết hạn!",
        icon: "error",
      });
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'manager_img');
    // formData.append("cloud_name", "djpujlimr");
    formData.append('folder', 'home');
    try {
      const res = await axios.post(
        API_HOME_CLOUD,
        formData
      );

      const { secure_url, public_id } = res.data;
      onImageUpload({ url: secure_url, public_id });
    } catch (error) {
      console.error('Upload thất bại', error);
    }
  };

  return (
    <>
      <button className='w-[40px] h-[40px] bg-yellow-500 rounded-[50%] text-[25px] p-[auto] hover:bg-yellow-700' type="button" onClick={() => fileInputRef.current?.click()}>
        +
      </button>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
    </>
  );
};

export default ButtonAddImg;
