import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ImageUploadBox from './imageUpload';

type ModalPackageProps = {
  open: boolean;
  handleClose: () => void;
  data: {
    id: number;
    namePacket: string;
    pricePacket: number;
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
    >
      <Box sx={style}>
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Thông tin gói</h1>
        <div className="space-y-2 text-base text-gray-700 mb-6">
          <p><strong>Tên gói:</strong> {data.namePacket}</p>
          <p><strong>Giá:</strong> {data.pricePacket.toLocaleString()} VNĐ</p>
          <p><strong>Mô tả:</strong> {data.description}</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-start">
          <ImageUploadBox />
          <ImageUploadBox />
          <ImageUploadBox />
        </div>
      </Box>
    </Modal>
  );
}
