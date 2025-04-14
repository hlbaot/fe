import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ImageUploadBox from './imageUpload';

type ModalPackageProps = {
  open: boolean;
  handleClose: () => void;
  data: {
    id: number;
    namePackage: string;
    pricePackage: number;
    description: string;
  };
};

export default function ModalPackage({ open, handleClose, data }: ModalPackageProps) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 800,
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: 4,
    boxShadow: 24,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        zIndex: 1000,
      }}
    >
      <Box sx={{ ...style, zIndex: 1001 }}>
        <h1 className="text-2xl text-center font-semibold mb-4 text-gray-800">Thông tin gói</h1>
        <div className="space-y-2 text-base text-gray-700 mb-6">
          <p><strong>Tên gói:</strong> {data.namePackage}</p>
          <p><strong>Giá:</strong> {data.pricePackage.toLocaleString()} VNĐ</p>
          <p><strong>Mô tả:</strong> {data.description}</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-start">
          <div className="flex flex-wrap gap-4 justify-start">
            <ImageUploadBox index={0} packageId={data.id} />
            <ImageUploadBox index={1} packageId={data.id} />
            <ImageUploadBox index={2} packageId={data.id} />
          </div>
        </div>

      </Box>
    </Modal>
  );
}
