import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/effect-creative';
import '../assets/styles/Explore.scss';


type ExploreProps = {};

const Explore: React.FC<ExploreProps> = () => {
    const images: string[] = [
        'https://i.pinimg.com/236x/69/8b/92/698b927625e6df7962afdf190d90c5ca.jpg',
        'https://i.pinimg.com/236x/4d/a2/05/4da205bee0604d4d289e3a8c9b273187.jpg',
        'https://i.pinimg.com/236x/1f/9b/2a/1f9b2adfaf6052055d5754b1c49464a9.jpg',
    ];

    const texts: string[] = [
        "Studio chúng tôi lưu giữ những khoảnh khắc quý giá, từ kỷ niệm gia đình đến dấu ấn thành công, biến chúng thành ký ức vĩnh cửu qua ánh sáng, màu sắc và cảm xúc."  
    ];

    return (
        <section className="w-full h-[100vh]">
            <div className="explore">
                <div className="left">
                    <div className="text_head w-full h-auto">
                        <h1
                            className="text-center text-black font-script text-[50px] font-bold"
                            data-aos="fade-down"
                        >
                            Explore
                        </h1>
                    </div>
                    <div className="rounded-[20px] bg-gray-100 shadow-[0px_4px_10px_rgba(0,0,0,0.3)] p-[1rem] mt-[2rem]">
                        <h1 className="text-black text-2xl font-bold text-center">
                            Nơi lưu giữ khoảnh khắc trọn vẹn!
                        </h1>
                        <div className="py-[2rem] px-[1rem]">
                            {texts.map((text, index) => (
                                <p
                                    key={index}
                                    className="text-l font-bold italic text-black"
                                    data-aos="fade-right"
                                >
                                    {text}
                                </p>
                            ))}
                        </div>
                        <h4 className="text-center font-semibold text-black text-[20px]">
                            Hãy để [Tên studio] giúp bạn lưu giữ những khoảnh khắc quý giá nhất!
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <div className="img" data-aos="zoom-in">
                        <Swiper
                            modules={[EffectCreative]}
                            loop={true}
                            effect="creative"
                            creativeEffect={{
                                prev: {
                                    translate: [0, 0, -400],
                                    rotate: [0, 90, 0],
                                },
                                next: {
                                    translate: [0, 0, -400],
                                    rotate: [0, -90, 0],
                                },
                            }}
                            className="explore-swiper"
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="slide-content" style={{ backgroundImage: `url(${image})` }}></div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Explore;
