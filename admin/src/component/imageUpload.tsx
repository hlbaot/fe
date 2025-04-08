import { useState } from "react";

let uploadBoxCounter = 0;

function ImageUploadBox() {
  const [image, setImage] = useState<string | null>(null);
  const uniqueId = `photo-upload-${++uploadBoxCounter}`;

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-md w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center relative overflow-hidden transition-all duration-300">
      {image ? (
        <>
          <img
            src={image}
            alt="preview"
            className="w-full h-full object-cover rounded-xl"
          />
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 bg-white rounded-full text-black text-sm w-6 h-6 flex items-center justify-center hover:bg-red-500 hover:text-white shadow"
            title="Xóa ảnh"
          >
            ×
          </button>
        </>
      ) : (
        <div className="text-center">
          <label
            htmlFor={uniqueId}
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition duration-200 text-sm"
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
