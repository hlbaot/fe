import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ButtonAddService: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Bảo toàn</h1>
        </Box>
      </Modal>
      <button onClick={handleOpen} className='bg-green-500 rounded-[30px] text-[15px] p-2 hover:bg-green-700 text-white ' type="button">
        <FontAwesomeIcon icon={faPlus} />
        Thêm gói dịch vụ
      </button>
    </>
  );
}

export default ButtonAddService;
