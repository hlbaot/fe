import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../assets/styles/Review.scss";

const Review: React.FC = () => {
  const [rating, setRating] = useState<number>(0);

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Email is required"),
      message: Yup.string().required("Feedback is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post("API_feedback", {
          ...values,
          rating,
        });

        if (response.status === 200) {
          alert("Cảm ơn bạn đã gửi đánh giá!");
          resetForm();
          setRating(0);
        }
      } catch (error) {
        alert("Có lỗi xảy ra, vui lòng thử lại!");
        console.error("Error submitting feedback:", error);
      }
    },
  });

  return (
    <section className="w-full h-[auto] flex justify-center items-center">
      <div className="review py-[2rem]">
        {/* Left Side */}
        <div className="left">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-black shadow-xl shadow-black border border-slate-200 grid grid-cols-6 gap-4 rounded-xl p-6 text-sm w-[100%]"
          >
            <h1 className=" text-center text-white text-xl font-bold col-span-6">Send Feedback</h1>

            <div className="col-span-6  ">
              {formik.touched.email && formik.errors.email && (
                <p className="pb-[5px] text-red-500 text-sm">
                  {formik.errors.email}
                </p>
              )}
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email..."
                className="bg-slate-100 text-slate-600 border border-black w-full rounded-lg mb-2 p-2 focus:border-slate-600"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>

            <div className="col-span-6 ">
              {formik.touched.message && formik.errors.message && (
                <p className="pb-[5px]  text-red-500 text-sm">
                  {formik.errors.message}
                </p>
              )}
              <textarea
                id="message"
                name="message"
                placeholder="Your feedback..."
                className="bg-slate-100 text-slate-600 h-[250px] w-full placeholder:text-slate-600 placeholder:opacity-80 border border-slate-200 outline-none rounded-lg p-2 focus:border-slate-600"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
            </div>

            {/* Star rating */}
            <div className="head_form w-full flex justify-between items-center col-span-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer text-2xl ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>

              <button type="submit" className="bg-white text-black py-2 px-4 rounded-lg">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="text_head w-full h-auto">
            <h1
              className="text-center text-black font-script text-[50px] font-bold"
              data-aos="fade-down"
            >
              Your review
            </h1>
          </div>
          <div className="text_body" data-aos="fade-up">
            <p className="text-black text-xl text-center px-4 pt-4">
              " Hãy để lại ý kiến của bạn! Chúng tôi luôn lắng nghe và trân trọng mọi góp ý để cải thiện
              chất lượng dịch vụ. Đánh giá của bạn giúp chúng tôi ngày càng hoàn thiện hơn! "
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
