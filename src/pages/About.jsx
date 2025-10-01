import React, { useEffect, useState, useRef } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [activePoint, setActivePoint] = useState(null);
    const videoRef = useRef(null);

    const points = [
        {
            id: 1,
            position: 'top-center',
            text: 'Обеспечивает максимальный захват и точность управления.',
            title: 'ГРЕЙФЕРНАЯ КИСТЬ'
        },
        {
            id: 2,
            position: 'center',
            text: 'Высокоточная и надежная система управления протезом.',
            title: 'ЭМГ СИСТЕМА УПРАВЛЕНИЯ'
        },
        {
            id: 3,
            position: 'bottom-center',
            text: 'Полная свобода движения запястья для максимальной функциональности.',
            title: 'РОТАЦИЯ ЗАПЯСТЬЯ'
        }
    ];

    const getPointPosition = (position) => {
        switch (position) {
            case 'top-center':
                return 'top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
            case 'center':
                return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
            case 'bottom-center':
                return 'bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2';
            default:
                return '';
        }
    };

    useEffect(() => {
        // Запускаем анимацию сразу при загрузке страницы
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Небольшая задержка для плавности

        return () => clearTimeout(timer);
    }, []);

    // Закрываем всплывающие окна при клике вне их
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (activePoint && !event.target.closest('.popup-container')) {
                setActivePoint(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activePoint]);

    return (
        <div>
            {/* First Section - Video Animation */}
            <section className="relative bg-primary pt-24 sm:pt-32 pb-16 sm:pb-20 min-h-screen flex items-center">
                <div className="container mx-auto px-4 relative">
                    <div className="flex justify-center items-center">
                        <div 
                            ref={videoRef}
                            className={`relative transform transition-all duration-1000 ease-out ${
                                isVisible 
                                    ? 'translate-x-0 opacity-100 scale-100' 
                                    : 'translate-x-full opacity-0 scale-95'
                            }`}
                        >
                            <video 
                                className="w-full max-w-4xl sm:max-w-6xl rounded-2xl sm:rounded-3xl shadow-2xl"
                                src="/img/media/video/v2.mov"
                                autoPlay
                                playsInline
                                muted
                            />
                            
                            {/* Interactive Points */}
                            {points.map((point) => (
                                <button
                                    key={point.id}
                                    className={`absolute w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400/70 rounded-full border border-white/80 shadow-lg hover:bg-yellow-300/80 transition-colors duration-200 ${getPointPosition(point.position)}`}
                                    onClick={() => setActivePoint(activePoint === point.id ? null : point.id)}
                                >
                                    <div className="w-full h-full bg-yellow-400/70 rounded-full animate-pulse"></div>
                                    
                                    {/* Popup Window */}
                                    {activePoint === point.id && (
                                        <div className={`popup-container absolute bg-white rounded-lg shadow-2xl p-3 sm:p-4 max-w-xs z-10 ${
                                            point.position === 'top-center' ? 'right-full top-1/2 transform -translate-y-1/2 mr-2' :
                                            point.position === 'center' ? 'right-full top-1/2 transform -translate-y-1/2 mr-2' :
                                            point.position === 'bottom-center' ? 'right-full top-1/2 transform -translate-y-1/2 mr-2' : ''
                                        }`}>
                                            <div className="text-black">
                                                <h3 className="font-bold text-base sm:text-lg mb-2 text-yellow-600">{point.title}</h3>
                                                <p className="text-xs sm:text-sm">{point.text}</p>
                                            </div>
                                            {/* Arrow pointing to the point */}
                                            <div className={`absolute w-0 h-0 ${
                                                point.position === 'top-center' ? 'left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent border-l-white' :
                                                point.position === 'center' ? 'left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent border-l-white' :
                                                point.position === 'bottom-center' ? 'left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent border-l-white' : ''
                                            }`}></div>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section - Cosmetic Hand */}
            <section className="bg-second pt-12 sm:pt-20 pb-0 relative">
                <div className="container mx-auto px-4 relative">
                    {/* Mobile Layout */}
                    <div className="md:hidden">
                        <div className="space-y-6">
                            {/* First feature */}
                            <div className="bg-primary rounded-2xl p-4">
                                <div className="flex items-start">
                                    <span className="bg-[#cccccc] text-black w-8 h-8 rounded-md flex items-center justify-center font-normal font-primary mr-3 text-lg">01</span>
                                    <div>
                                        <h3 className="text-hover font-normal font-primary text-lg">КОСМЕТИЧЕСКАЯ КИСТЬ</h3>
                                        <p className="text-sm mt-1 font-primary text-gray-300">Версия кисти с тугоподвижными пальцами. Изготавливается под индивидуальные мерки, с подбором уникальной геометрии под каждого пользователя.</p>
                                        </div>
                                </div>
                            </div>

                            {/* Second feature */}
                            <div className="bg-primary rounded-2xl p-4">
                                <div className="flex items-start">
                                    <span className="bg-[#cccccc] text-black w-8 h-8 rounded-md flex items-center justify-center font-normal font-primary mr-3 text-lg">02</span>
                                    <div>
                                        <h3 className="text-hover font-normal font-primary text-lg">БЫСТРОСЪЕМНОЕ ЗАПЯСТЬЕ</h3>
                                        <p className="text-sm mt-1 font-primary text-gray-300">Версия кисти с тугоподвижными пальцами. Изготавливается под индивидуальные мерки, с подбором уникальной геометрии под каждого пользователя.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Third feature */}
                            <div className="bg-primary rounded-2xl p-4">
                                <div className="flex items-start">
                                    <span className="bg-[#cccccc] text-black w-8 h-8 rounded-md flex items-center justify-center font-normal font-primary mr-3 text-lg">03</span>
                                    <div>
                                        <h3 className="text-hover font-normal font-primary text-lg">РОТАЦИЯ ЗАПЯСТЬЯ НА 360</h3>
                                        <p className="text-sm mt-1 font-primary text-gray-300">Система быстросъемного запястья, позволяющая переключаться между биоэлектрической грейферной кистью и косметической пятипалой.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image at bottom on mobile */}
                        <div className="mt-8 flex justify-center">
                            <img src="./img/cosmetic.png" alt="Рука" className="w-full max-w-sm h-64 object-contain" />
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                        {/* Image and frames: all frames on the right, arrows to the left into the photo */}
                        <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-3 gap-y-6 mt-16 items-center">
                            {/* Photo spans rows */}
                            <div className="row-span-3 flex items-end justify-center self-end overflow-hidden">
                                <img src="./img/cosmetic.png" alt="Рука" className="w-[200%] sm:w-[140%] md:w-full h-[42rem] md:h-[48rem] object-bottom" />
                            </div>
                            {/* Row 1: arrow from middle to left + right box */}
                            <div className="justify-self-center self-center flex items-center">
                                <div className="mr-1 w-2 h-2 bg-[#cccccc] rotate-45"></div>
                                <div className="h-px bg-[#cccccc] w-48"></div>
                            </div>
                            <div className="bg-primary rounded-3xl p-4">
                                <div className="flex items-start">
                                    <span className="bg-[#cccccc] text-black w-30 h-10 rounded-md flex items-center justify-center font-normal font-primary mr-3 text-2xl">01</span>
                                    <div>
                                        <h3 className="text-hover font-normal font-primary text-2xl">КОСМЕТИЧЕСКАЯ КИСТЬ</h3>
                                        <p className="text-base mt-1 font-primary text-gray-300">Версия кисти с тугоподвижными пальцами. Изготавливается под индивидуальные мерки, с подбором уникальной геометрии под каждого пользователя.</p>
                                        </div>
                                </div>
                            </div>

                            {/* Row 2: arrow center + right box */}
                            <div className="justify-self-center self-center flex items-center">
                                <div className="mr-1 w-2 h-2 bg-[#cccccc] rotate-45"></div>
                                <div className="h-px bg-[#cccccc] w-48"></div>
                            </div>
                            <div className="bg-primary rounded-3xl p-4">
                                <div className="flex items-start">
                                    <span className="bg-[#cccccc] text-black w-30 h-10 rounded-md flex items-center justify-center font-normal font-primary mr-3 text-2xl">02</span>
                                    <div>
                                        <h3 className="text-hover font-normal font-primary text-2xl">БЫСТРОСЪЕМНОЕ ЗАПЯСТЬЕ</h3>
                                        <p className="text-base mt-1 font-primary text-gray-300">Система быстросъемного запястья, позволяющая переключаться между биоэлектрической грейферной кистью и косметической пятипалой.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: arrow bottom + right box */}
                            <div className="justify-self-center self-center flex items-center">
                                <div className="mr-1 w-2 h-2 bg-[#cccccc] rotate-45"></div>
                                <div className="h-px bg-[#cccccc] w-48"></div>
                            </div>
                            <div className="bg-primary rounded-3xl p-4">
                                <div className="flex items-start">
                                    <span className="bg-[#cccccc] text-black w-30 h-10 rounded-md flex items-center justify-center font-normal font-primary mr-3 text-2л">03</span>
                                    <div>
                                        <h3 className="text-hover font-normal font-primary text-2xl">РОТАЦИЯ ЗАПЯСТЬЯ НА 360</h3>
                                        <p className="text-base mt-1 font-primary text-gray-300">Поворотная система запястья, позволяющая вращать запястье на 360 градусов.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flexibility Section */}
            <section className="bg-black py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-hover font-second text-center mb-4">
                        МНОГОКОПОНЕНТНЫЙ ПРОЦЕСС РАЗРАБОТКИ
                    </h2>
                </div>
            </section>

            {/* Photo Section - Three diagonal images with full-width gray background and larger first two photos */}
            <section className="bg-black pt-6 sm:pt-8 pb-12 sm:pb-16">
                <div className="relative w-full" style={{ backgroundColor: 'var(--color-second)' }}>
                    <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10">
                        {/* Mobile Layout */}
                        <div className="md:hidden">
                            <div className="space-y-4 py-4">
                                <div className="overflow-hidden rounded-lg">
                                    <img src="/img/danil and sen.jpg" alt="Фото 1" className="w-full h-48 object-cover" />
                                </div>
                                <div className="overflow-hidden rounded-lg">
                                    <img src="/img/andrey work1.JPG" alt="Фото 2" className="w-full h-48 object-cover" />
                                </div>
                                <div className="overflow-hidden rounded-lg">
                                    <img src="/img/nikita work1.jpg" alt="Фото 3" className="w-full h-48 object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden md:grid grid-cols-3 gap-6 sm:gap-10 py-6 items-end">
                            <div className="clip-path-1 overflow-hidden min-w-0">
                                <img src="/img/danil and sen.jpg" alt="Фото 1" className="w-full h-[26rem] md:h-[28rem] object-cover object-bottom" />
                            </div>
                            <div className="clip-path-2 overflow-hidden min-w-0">
                                <img src="/img/andrey work1.JPG" alt="Фото 2" className="w-full h-[26rem] md:h-[28rem] object-cover object-bottom" />
                            </div>
                            <div className="clip-path-3 overflow-hidden min-w-0">
                                <img src="/img/nikita work1.jpg" alt="Фото 3" className="w-full h-[26rem] md:h-[28rem] object-cover object-bottom" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* User Testimonials */}
            <section className="bg-black py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="flex items-start">
                            <div className="text-white text-xl sm:text-2xl mr-2">▲</div>
                            <p className="font-primary text-lg sm:text-2xl md:text-3xl">
                                Проект основан на применении компетенций из различных областей: бионики, робототехники и мехатроники. Мы также используем аддитивные технологии 3D печати для создания прототипов и деталей готовых устройств.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <div className="text-white text-xl sm:text-2xl mr-2">▲</div>
                            <p className="font-primary text-lg sm:text-2xl md:text-3xl">
                            Наша цель - создание функционального бионического протеза верхних конечностей, доступного для всех нуждающихся.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="bg-second py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <p className="text-xl sm:text-2xl md:text-3xl font-primary font-bold">
                            
                            
                        </p>
                    </div>
                    <div className="flex justify-center mb-6 sm:mb-8">
                        <img className="w-full max-w-4xl rounded-2xl shadow-2xl" src="/img/plata.jpg" controls playsInline />
                    </div>
                    <p className="font-primary text-lg sm:text-xl md:text-2xl text-center">
                        Управляется ARTEVO MB1 - нашим собственным интеллектуальным модулем управления.
                    </p>
                </div>
            </section>
            <Contact />

            <Footer />
        </div>
    );
}
