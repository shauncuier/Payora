// src/components/LogoSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const logos = [
    { name: "DESCO", img: "https://i.ibb.co/k2rcppgM/5a663db47c27.webp" },
    { name: "WASA", img: "https://i.ibb.co/dwcknWCD/d648c6c6a84b.png" },
    { name: "KDA", img: "https://i.ibb.co/spPCzyRJ/8fbcdbf2d914.png" },
    { name: "Gaslink", img: "https://i.ibb.co/HpDQSHKg/ef756b2a68e1.jpg" },
    { name: "Rajshahi WASA", img: "https://i.ibb.co/JR2VLJhY/fa4fa61e2c3c.webp" },
    { name: "WZPDCL", img: "https://i.ibb.co/Jj2xbXnM/6ee23a9f571c.png" },
    { name: "BPDB", img: "https://i.ibb.co/TBbFhYpH/4b3667a33fa4.png" },
    { name: "Titas Gas", img: "https://i.ibb.co/HD1ggtJN/16b94c1c10e6.jpg" },
    { name: "NESCO", img: "https://i.ibb.co/nTqPpMG/61111999e243.png" },
];

export default function LogoSlider() {
    return (
        <section className="py-10 bg-blue-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">We Support All Major Utility Providers</h2>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    breakpoints={{
                        640: { slidesPerView: 4 },
                        768: { slidesPerView: 5 },
                        1024: { slidesPerView: 6 },
                    }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    modules={[Autoplay]}
                >
                    {logos.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <div className="p-2">
                                <img
                                    src={logo.img}
                                    alt={logo.name}
                                    className="h-16 mx-auto object-contain"
                                    title={logo.name}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
