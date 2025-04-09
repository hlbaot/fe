import { useEffect, useState } from "react";
import API_HOME_CLOUD from '../api/upImgCloud';
import Swal from "sweetalert2";
import axios from "axios";

type Props = {
  index: number; 
  packageId: number | string;
};

function ImageUploadBox({ index, packageId }: Props) {
  const [image, setImage] = useState<string | null>(null);
  const uniqueId = `photo-upload-${index}`;
  const key = `uploaded_image_${packageId}_${index}`; 

  useEffect(() => {
    const savedImage = localStorage.getItem(key);
    if (savedImage) {
      setImage(savedImage);
    } else {
      setImage(null); 
    }
  }, [key]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "manager_img");
      formData.append("folder", `service/package_${packageId}`);

      try {
        const res = await fetch(API_HOME_CLOUD, {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        if (data.secure_url) {
          setImage(data.secure_url);
          localStorage.setItem(key, data.secure_url); 
        }
      } catch (error) {
        console.error("Lỗi khi upload ảnh:", error);
      }
    }
  };

  const handleRemove = async () => {
    if (!image) return;
  
    const confirm = await Swal.fire({
      title: "Bạn có chắc muốn xóa ảnh này?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
      confirmButtonColor: "#ef4444", 
      cancelButtonColor: "#d1d5db",  
      customClass: {
        popup: 'z-[1400]',
      }
    });
    
  
    if (confirm.isConfirmed) {
      try {
        const res = await axios.post('/api/delete-image', {
          imageUrl: image,
          packageId,
        });
  
        if (res.data.success) {
          localStorage.removeItem(key);
          setImage(null);
  
          await Swal.fire({
            title: "Đã xóa ảnh!",
            icon: "success",
            customClass: {
              popup: 'z-[1400]'
            }
          });
        } else {
          throw new Error('Xóa thất bại ở server');
        }
      } catch (err) {
        console.error("Lỗi khi xóa ảnh:", err);
        Swal.fire({
          title: "Lỗi",
          text: "Không thể xóa ảnh",
          icon: "error",
          customClass: {
            popup: 'z-[1400]'
          }
        });
      }
    }
  };
  
  

  return (
    <div className="bg-white rounded-xl shadow-md w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center relative overflow-hidden transition-all duration-300">
      {image ? (
        <>
          <img
            src={image}
            alt="Uploaded"
            className="w-full h-full object-cover rounded-xl"
          />
          <button
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-white rounded-full text-black text-sm w-6 h-6 flex items-center justify-center hover:bg-red-500 hover:text-white"
            title="Xóa ảnh"
          >
            ×
          </button>
        </>
      ) : (
        <div className="text-center">
          <label
            htmlFor={uniqueId}
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 text-sm"
          >
            Tải ảnh lên
          </label>
          <input
            type="file"
            id={uniqueId}
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
        </div>
      )}
    </div>
  );
}


export default ImageUploadBox;
