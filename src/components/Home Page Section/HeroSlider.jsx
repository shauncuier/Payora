import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroSlider = () => {
    const slides = [
        {
            id: 1,
            title: "Pay Your Utility Bills Easily",
            description: "Electricity, Gas, Water, Internet – All in One Place",
            img: "https://i.ibb.co/1txw508m/1354bac8fd6c.jpg",
        },
        {
            id: 2,
            title: "Secure & Reliable Payment",
            description: "Powered by trusted providers & secure gateways",
            img: "https://i.ibb.co/X1pp7h7/7ec79915433e.jpg",
        },
        {
            id: 3,
            title: "Support Local Services",
            description: "Connect with all major Bangladeshi bill providers",
            img: "https://i.ibb.co/XrN3j2Wk/37a026afd82f.jpg",
        },
    ];

    return (
        <div className="w-full">
            <Swiper
                loop={true}
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-white px-4"
                            style={{ backgroundImage: `url(${slide.img})` }}
                        >
                            <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                                <p className="text-lg md:text-xl">{slide.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;
