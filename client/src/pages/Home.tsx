import React, { useEffect, useState } from "react";
import "../assets/styles/Home.scss";
import "../assets/styles/Contact.scss";
import "aos/dist/aos.css";
import AOS from "aos";
import axios from "axios";

// const slides: string[] = [
//     "https://i.pinimg.com/474x/03/8b/dd/038bdd199938e8997091788f05fc7a22.jpg",
//     "https://i.pinimg.com/474x/03/8b/dd/038bdd199938e8997091788f05fc7a22.jpg",
//     "https://i.pinimg.com/736x/67/85/c7/6785c7c3f78987b5d9835d67975f03f3.jpg",
//     "https://i.pinimg.com/736x/67/85/c7/6785c7c3f78987b5d9835d67975f03f3.jpg",
//     "https://i.pinimg.com/236x/ed/fb/0f/edfb0f6332ad1f2e3471620ab6095f57.jpg",
// ];

interface Image {
    image: string;
}

const Home: React.FC = () => {
    const [dataimg, setDataimg] = useState<Image[]>([]);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Image[]>("https://your-api-endpoint.com/images");
                setDataimg(response.data);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const slide = document.getElementById("slide");
            const lists = document.querySelectorAll(".item");

            if (slide && lists.length > 0) {
                slide.appendChild(lists[0]);
            }
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-[100%] h-[100vh]" id="home">
            <div className="home">
                <div className="content-wrapper" data-aos="fade-up">
                    <h1 className="font-script text-white text-4xl md:text-5xl font-bold text-center title">
                        My Studio
                    </h1>

                    <p className="text-white font-sans text-lg md:text-xl font-bold text-center max-w-lg mx-auto">
                        Chúng tôi cung cấp dịch vụ chụp ảnh chuyên nghiệp, từ ảnh cưới, sự kiện đến sản phẩm, giúp bạn lưu giữ những khoảnh khắc tuyệt vời.
                    </p>
                </div>

                <div className="container">
                    <div id="slide">
                        {dataimg.map((item, index) => (
                            <div
                                key={index}
                                className="item"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
