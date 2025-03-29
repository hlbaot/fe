import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../assets/styles/Modal.scss';

interface ServiceData {
  title: string;
  description: string;
  price: number;
  images: string[];
}

interface CustomModalProps {
  open: boolean;
  handleClose: () => void;
  serviceData?: ServiceData;
}

interface FormValues {
  fullName: string;
  email: string;
  date: string;
  time: string;
  address: string;
  note: string;
}

  export default function CustomModal({ open, handleClose, serviceData }: CustomModalProps) {
    if (!serviceData) return null;

    const { title, description, price, images } = serviceData;
    const [selectedImage, setSelectedImage] = useState<string>("");

    useEffect(() => {
      if (serviceData) {
        setSelectedImage(serviceData.images[0]);
      }
    }, [serviceData]);

    const validationSchema = Yup.object({
      fullName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      date: Yup.string().required("Required"),
      time: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      note: Yup.string(),
    });

    return (
      <section>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-box bg-white rounded-lg w-[90%] max-w-[1000px] p-4">
            <div className="modal-content flex flex-row h-full gap-4">
              
              <div className="left w-[65%] h-full flex flex-col gap-2">
                
                <div className="main-image-container flex flex-col-reverse md:flex-row items-center gap-2 h-[70%]">
                  <img
                    className="main-image w-[50%] h-[350px] rounded-lg object-cover"
                    src={selectedImage}
                    alt="Main package"
                  />
                  <div className="package-info flex-1 text-center text-black">
                    <h3 className="text-xl font-medium mb-1">{title}</h3>
                    <p className="text-black text-base mb-1">{description}</p>
                    <p className="text-black text-base">
                      From <span className="text-black">{price}</span> VNĐ
                    </p>
                  </div>
                </div>
                
                <div className="thumbnail-container flex gap-4 flex-nowrap overflow-x-auto h-[30%]">
                  {images.map((image, index) => (
                    <img
                      className={`w-[100px] h-[100px] rounded-md object-cover cursor-pointer transition-transform ${
                        selectedImage === image ? "border-2 border-blue-500 scale-105" : ""
                      }`}
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index}`}
                      onClick={() => setSelectedImage(image)} 
                    />
                  ))}
                </div>
              </div>

              <div className="right w-[35%] h-full p-2">
                <Formik
                  initialValues={{
                    fullName: "",
                    email: "",
                    date: "",
                    time: "",
                    address: "",
                    note: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={async (values: FormValues, { resetForm }) => {
                    try {
                      const response = await axios.post("https://your-api-endpoint.com/submit", values);

                      if (response.status === 200) {
                        alert("Gửi thông tin thành công!");
                        resetForm();
                        handleClose();
                      }
                    } catch (error) {
                      alert("Có lỗi xảy ra, vui lòng thử lại!");
                      console.error("Error submitting form:", error);
                    }
                  }}
                >
                  {({ handleSubmit }) => (
                    <Form className="form-container flex flex-col gap-2 h-full">
                      <h2 className="text-black text-xl">Fill in the information to complete the booking</h2>
                      <div className="form-row flex gap-2 flex-wrap">
                        <div className="form-field flex-1 min-w-[150px]">
                          <label className="block text-sm mb-1 text-black">Full Name</label>
                          <Field
                            name="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full p-2 border border-gray-300 rounded-md text-black text-sm"
                          />
                          <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs mt-1" />
                        </div>
                        <div className="form-field flex-1 min-w-[150px]">
                          <label className="block text-sm mb-1 text-black">Email</label>
                          <Field
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-2 border border-gray-300 rounded-md text-black text-sm"
                          />
                          <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                        </div>
                      </div>
                      <div className="form-row flex gap-2 flex-wrap">
                        <div className="form-field flex-1 min-w-[150px]">
                          <label className="block text-sm mb-1 text-black">Date</label>
                          <Field
                            name="date"
                            type="date"
                            className="w-full p-2 border border-gray-300 rounded-md text-black text-sm"
                          />
                          <ErrorMessage name="date" component="div" className="text-red-500 text-xs mt-1" />
                        </div>
                        <div className="form-field flex-1 min-w-[150px]">
                          <label className="block text-sm mb-1 text-black">Time</label>
                          <Field
                            name="time"
                            type="time"
                            className="w-full p-2 border border-gray-300 rounded-md text-black text-sm"
                          />
                          <ErrorMessage name="time" component="div" className="text-red-500 text-xs mt-1" />
                        </div>
                      </div>
                      <div className="form-field">
                        <label className="block text-sm mb-1 text-black">Address</label>
                        <Field
                          name="address"
                          type="text"
                          placeholder="Enter your address"
                          className="w-full p-2 border border-gray-300 rounded-md text-black text-sm"
                        />
                        <ErrorMessage name="address" component="div" className="text-red-500 text-xs mt-1" />
                      </div>
                      <div className="form-field">
                        <label className="block text-sm mb-1 text-black">Note</label>
                        <Field
                          name="note"
                          as="textarea"
                          placeholder="Enter additional notes"
                          className="w-full p-2 border border-gray-300 rounded-md text-black text-sm"
                        />
                      </div>
                      <div className="button-container flex justify-between gap-2 mt-2">
                        <button type="button" className="back-button px-4 py-2 bg-gray-500 text-white rounded-md text-sm" onClick={handleClose}>
                          Back
                        </button>
                        <button type="submit" className="submit-button px-4 py-2 bg-black text-white rounded-md text-sm">
                          Send
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Box>
        </Modal>
      </section>
    );
  }