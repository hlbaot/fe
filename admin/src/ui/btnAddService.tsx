import * as React from 'react';
import '../assets/styles/managerService.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  borderRadius: 5,
};

interface Values {
  namePacket: string;
  pricePacket: number;
  description: string;
}

const validationSchema = Yup.object({
  namePacket: Yup.string().required('Tên gói là bắt buộc'),
  pricePacket: Yup.number()
    .min(0, 'Giá gói không được âm')
    .required('Giá gói là bắt buộc'),
  description: Yup.string().required('Mô tả là bắt buộc'),
});

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
        <Box sx={styleModal}>
          <h1 className="text-center font-bold text-xl">Nhập thông tin gói mới</h1>
          <Formik
            initialValues={{
              namePacket: '',
              pricePacket: 0,
              description: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
            validateOnBlur={false} 
            validateOnChange={false} 
          >
            {({ errors }) => (
              <Form className="space-y-6 mt-4">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label
                      htmlFor="namePacket"
                      className={`block text-sm font-medium mb-1 ${errors.namePacket ? 'text-red-600' : ''}`}
                    >
                      Tên gói
                    </label>
                    <Field
                      id="namePacket"
                      name="namePacket"
                      placeholder="Nhập tên gói"
                      className={`w-full border ${errors.namePacket ? 'border-red-500' : 'border-gray-300'
                        } rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400`}
                    />
                    <ErrorMessage
                      name="namePacket"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="w-1/2">
                    <label
                      htmlFor="pricePacket"
                      className={`block text-sm font-medium mb-1 ${errors.pricePacket ? 'text-red-600' : ''}`}
                    >
                      Giá gói
                    </label>
                    <Field
                      id="pricePacket"
                      name="pricePacket"
                      placeholder="0"
                      type="number"
                      className={`w-full border ${errors.pricePacket ? 'border-red-500' : 'border-gray-300'
                        } rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400`}
                    />
                    <ErrorMessage
                      name="pricePacket"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className={`block text-sm font-medium mb-1 ${errors.description ? 'text-red-600' : ''}`}
                  >
                    Mô tả
                  </label>
                  <Field
                    as="textarea"
                    id="description"
                    name="description"
                    placeholder="Nhập mô tả của bạn"
                    rows={5}
                    className={`w-full border ${errors.description ? 'border-red-500' : 'border-gray-300'
                      } rounded-md px-3 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-blue-400`}
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="px-[2rem] py-[5px] rounded-[10px] bg-green-500 text-white font-bold hover:bg-green-600 cursor-pointer"
                >
                  Tạo
                </button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>

      <button
        onClick={handleOpen}
        className="bg-green-500 rounded-[30px] text-[15px] p-2 hover:bg-green-700 text-white flex justify-center items-center gap-2"
        type="button"
      >
        <FontAwesomeIcon icon={faPlus} />
        Thêm gói dịch vụ
      </button>
    </>
  );
};

export default ButtonAddService;