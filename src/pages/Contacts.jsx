import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";

export default function Contacts() {
    const leftBlockRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        const measure = () => {
            if (leftBlockRef.current) {
                setContentHeight(leftBlockRef.current.getBoundingClientRect().height);
            }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);
    return (
        <div>
            {/* Contacts Section */}
            <section className="pt-30 sm:pt-40 pb-8 sm:pb-12 bg-primary min-height: 90vh">
                <div className="container mx-auto px-4">
                    {/* Mobile Layout */}
                    <div className="md:hidden">
                        <h2 className="font-second text-3xl sm:text-4xl font-bold text-hover mb-6 text-left">
                            НАШИ КОНТАКТЫ
                        </h2>

                        <div className="bg-second rounded-3xl mb-8">
                            <ul className="px-4 py-8 space-y-6">
                                <li className="text-left font-primary text-lg sm:text-xl">
                                    <i className="fa-solid fa-location-dot fa-lg pr-3"></i>
                                    35075 г. Краснодар, ул. Селезнева 150
                                </li>
                                <li className="text-left font-primary text-lg sm:text-xl">
                                    <i className="fa-solid fa-envelope fa-lg pr-3"></i>
                                    artevorteam@gmail.com
                                </li>
                                <li className="text-left font-primary text-lg sm:text-xl">
                                    <i className="fa-solid fa-phone fa-lg pr-3"></i>
                                    +7 (918) 630-07-68
                                </li>
                            </ul>
                        </div>

                        <div className="text-left mb-6">
                            <h3 className="font-primary text-lg sm:text-xl font-bold text-white mb-4">
                                Новости разработки
                            </h3>
                            <div className="w-1/4 border-2 border-hover"></div>
                        </div>

                        <div className="text-left mb-6">
                            <p className="font-primary text-base sm:text-lg text-[#828282] mb-6">
                                Следите за разработкой в соцсетях:
                            </p>
                            <div className="flex space-x-8">
                                <a href="https://vk.com/ddc2003" target="_blank" rel="noopener noreferrer" aria-label="VK" className="text-white hover:text-hover">
                                    <i className="fa-brands fa-vk fa-2x"></i>
                                </a>
                                <a href="https://t.me/DanielDragunov" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-white hover:text-hover">
                                    <i className="fa-brands fa-telegram fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex justify-between items-start">
                        <div className="w-1/2" ref={leftBlockRef}>
                            <h2 className="font-second text-4xl md:text-5xl font-bold text-hover mb-8 overflow-visible whitespace-nowrap">
                                НАШИ КОНТАКТЫ
                            </h2>

                            <div className="flex mt-8">
                                <div className="w-full bg-second rounded-3xl">
                                    <ul className="px-5 py-10 space-y-10">
                                        <li className="text-left font-primary text-2xl">
                                            <i className="fa-solid fa-location-dot fa-lg pr-15"></i>
                                            35075 г. Краснодар, ул. Селезнева 150
                                        </li>
                                        <li className="text-left font-primary text-2xl">
                                            <i className="fa-solid fa-envelope fa-lg pr-15"></i>
                                            artevorteam@gmail.com
                                        </li>
                                        <li className="text-left font-primary text-2xl">
                                            <i className="fa-solid fa-phone fa-lg pr-15"></i>
                                            +7 (918) 630-07-68
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex mt-8 ml-4 mb-8">
                                <h2 className="font-primary text-xl font-bold text-white overflow-visible whitespace-nowrap">
                                    Новости разработки
                                </h2>
                            </div>

                            <div className="w-1/4 ml-4 border-2 border-hover"></div>

                            <div className="flex mt-8 ml-4">
                                <p className="text-left font-primary text-xl text-[#828282]">
                                    Следите за разработкой в соцсетях:
                                </p>
                            </div>

                            <div className="flex mt-8 space-x-8">
                                <a href="https://vk.com/ddc2003" target="_blank" rel="noopener noreferrer" aria-label="VK" className="text-white hover:text-hover">
                                    <i className="fa-brands fa-vk fa-2x"></i>
                                </a>
                                <a href="https://t.me/DanielDragunov" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-white hover:text-hover">
                                    <i className="fa-brands fa-telegram fa-2x"></i>
                                </a>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col" style={{ height: contentHeight || undefined }}>
                            <div className="w-full" style={{ height: 2, backgroundColor: '#a1a19f' }} />
                            <div className="flex-1 flex">
                                <img
                                    src="./img/1.png"
                                    alt="Грейферная кисть «ФАЛАНГА - 2»"
                                    className="rotate-180 object-contain"
                                    style={{ height: (contentHeight ? contentHeight - 2 : undefined), width: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

