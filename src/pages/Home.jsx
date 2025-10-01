import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-primary text-white relative pt-24">
                <div className="container mx-auto pt-16 px-4">
                    {/* Mobile Layout */}
                    <div className="md:hidden flex items-end">
                        <div className="w-1/2 pr-4">
                            <h1 className="font-second text-3xl font-bold mb-4">
                                УМНЫЕ ПРОТЕЗЫ,
                            </h1>
                            <h2 className="font-primary text-2xl mb-8">
                                ДОСТУПНЫЕ КАЖДОМУ
                            </h2>
                            <Link 
                                to="/news" 
                                className="bg-white hover:bg-hover text-black text-lg font-primary font-[600] py-3 px-6 rounded-4xl inline-block transition-colors duration-200 cursor-pointer mb-6"
                            >
                                ПОДРОБНЕЕ
                            </Link>
                            <p className="text-sm text-[#757575] font-primary">
                                Грейферная кисть «ФАЛАНГА - 2»
                            </p>
                        </div>
                        <div className="w-1/2 relative">
                            <div
                                className="absolute -inset-5 rounded-full blur-3xl opacity-40 pointer-events-none"
                                style={{
                                    background:
                                        "radial-gradient(circle at 60% 70%, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0) 60%)",
                                }}
                            />
                            <img
                                src="./img/1.png"
                                alt="Грейферная кисть «ФАЛАНГА - 2»"
                                className="relative z-10 w-full h-80 object-contain object-right"
                            />
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:grid grid-cols-3 gap-4">
                        <div className="w-full">
                            <h1 className="font-second text-4xl md:text-5xl font-bold mb-4">
                                УМНЫЕ ПРОТЕЗЫ,
                            </h1>
                            <h2 className="font-primary text-3xl mb-8">
                                ДОСТУПНЫЕ КАЖДОМУ
                            </h2>
                            <Link 
                                to="/news" 
                                className="bg-white hover:bg-hover text-black text-xl font-primary font-[600] py-2 px-4 rounded-4xl inline-block transition-colors duration-200 cursor-pointer"
                            >
                                ПОДРОБНЕЕ
                            </Link>
                        </div>
                        <div className="w-full relative">
                            <div
                                className="absolute -inset-10 rounded-full blur-3xl opacity-40 pointer-events-none"
                                style={{
                                    background:
                                        "radial-gradient(circle at 60% 70%, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0) 60%)",
                                }}
                            />
                            <img
                                src="./img/1.png"
                                alt="Грейферная кисть «ФАЛАНГА - 2»"
                                className="relative z-10 w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-full grid grid-cols-1 grid-rows-[1fr_auto]">
                            <div className="w-full flex items-center justify-center">
                                
                            </div>
                            <div className="mb-10 flex justify-end items-end">
                                <p className="text-lg text-[#757575] font-primary text-right">
                                    Грейферная кисть «ФАЛАНГА - 2»
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="gradient_section text-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-second text-hover">
                        ЦЕЛЬ ПРОЕКТА
                    </h2>
                    <p className="w-full md:w-2/3 text-xl sm:text-2xl md:text-3xl my-6 sm:my-8 font-primary">
                        Наша цель заключается в улучшении качества жизни людей,
                        нуждающихся в вспомогательных технологиях, путем
                        разработки доступных и функциональных моделей протезов
                        рук.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-second p-4 sm:p-6 rounded-4xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-second flex items-center">
                                <span className="ml-2 sm:ml-3">ФУНКЦИОНАЛЬНОСТЬ</span>
                            </h3>
                            <p className="font-primary text-xs sm:text-sm mt-3 sm:mt-5 px-1 sm:px-2.5">
                                Мы считаем, что современный протез — это
                                инструмент. И этот инструмент должен справляться
                                с самыми разными задачами. Грейферная кисть с
                                ЭМГ системой управления обеспечивает уверенный
                                захват, простоту управления и долговечность.
                            </p>
                        </div>
                        <div className="bg-second p-4 sm:p-6 rounded-4xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-second flex items-center">
                                <span className="ml-2 sm:ml-3">ДОСТУПНОСТЬ</span>
                            </h3>
                            <p className="font-primary text-xs sm:text-sm px-1 sm:px-2.5">
                                Мы стремимся создать протез, который будет
                                доступнее существующих решений. Оптимизация
                                конструкции, выбор материалов и продуманный
                                модульный дизайн — шаги к снижению затрат на
                                производство и обслуживание.
                            </p>
                        </div>
                        <div className="bg-second p-4 sm:p-6 rounded-4xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-second flex items-center">
                                <span className="ml-2 sm:ml-3">ЭСТЕТИЧНОСТЬ</span>
                            </h3>
                            <p className="font-primary text-xs sm:text-sm px-1 sm:px-2.5">
                                Протез должен соответствовать не только
                                функциональным, но и эстетическим требованиям
                                пользователя. Быстросъемный модуль запястья
                                позволяет переключаться между мощной грейферной
                                кистью и косметической пятипалой рукой.
                            </p>
                        </div>
                    </div>
                    <h2 className="mt-8 sm:mt-10 text-3xl sm:text-4xl md:text-5xl font-bold font-second text-hover text-center">
                        МЫ — ARTEVO
                    </h2>
                </div>
            </section>

            {/* Team Photo */}
            <section className="bg-second text-white py-12 sm:py-16">
                <div className="container mx-auto flex flex-col items-center px-4">
                    <img 
                        src="/img/news/titanfall.jpg" 
                        alt="Общее фото команды" 
                        className="w-full max-w-4xl h-48 sm:h-64 md:h-80 object-cover shadow-md mb-6 sm:mb-8 rounded-lg"
                    />
                    <h2 className="text-lg sm:text-xl font-normal font-primary text-white text-center">
                        ОБЩЕЕ ФОТО КОМАНДЫ
                    </h2>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-primary text-white py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <div className="w-full border-1 border-[#a1a19f] my-8 sm:my-12 md:my-16"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                        <div className="p-4 sm:p-6 rounded-4xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" style={{backgroundColor: 'rgb(47, 49, 53)'}}>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start">
                                <img
                                    src="/img/danil.jpg"
                                    alt="Драгунов Даниил"
                                    className="w-18 h-18 sm:w-20 sm:h-20 rounded-lg mb-3 sm:mb-0"
                                />
                                <div className="sm:ml-5 text-center sm:text-left">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-second text-hover mb-2">
                                        ДРАГУНОВ ДАНИИЛ
                                    </h3>
                                    <p className="text-xs sm:text-sm">
                                        CEO. ИНЖЕНЕР-КОНСТРУКТОР. СТУДЕНТ ФТФ КУБГУ
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:p-6 rounded-4xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" style={{backgroundColor: 'rgb(47, 49, 53)'}}>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start">
                                <img
                                    src="/img/andrey1.jpg"
                                    alt="Андрей Иванисов"
                                    className="w-18 h-18 sm:w-20 sm:h-20 rounded-lg mb-3 sm:mb-0"
                                />
                                <div className="sm:ml-5 text-center sm:text-left">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-second text-hover mb-2">
                                        ИВАНИСОВ АНДРЕЙ
                                    </h3>
                                    <p className="text-xs sm:text-sm">
                                        FULL-STACK РАЗРАБОТЧИК. ВЫПУСКНИК ФТФ КУБГУ
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:p-6 rounded-4xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" style={{backgroundColor: 'rgb(47, 49, 53)'}}>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start">
                                <img
                                    src="/img/nik.jpg"
                                    alt="Топорков Никита"
                                    className="w-18 h-18 sm:w-20 sm:h-20 rounded-lg mb-3 sm:mb-0"
                                />
                                <div className="sm:ml-5 text-center sm:text-left">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-second text-hover mb-2">
                                        ТОПОРКОВ НИКИТА
                                    </h3>
                                    <p className="text-xs sm:text-sm">
                                        EMBEDDED-ИНЖЕНЕР. СТУДЕНТ ФКТиПМ КУБГУ
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:p-6 rounded-4xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" style={{backgroundColor: 'rgb(47, 49, 53)'}}>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start">
                                <img
                                    src="/img/sen.jpg"
                                    alt="Горбушин Арсений"
                                    className="w-18 h-18 sm:w-20 sm:h-20 rounded-lg mb-3 sm:mb-0"
                                />
                                <div className="sm:ml-5 text-center sm:text-left">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-second text-hover mb-2">
                                        ГОРБУШИН АРСЕНИЙ
                                    </h3>
                                    <p className="text-xs sm:text-sm">
                                        МЛАДШИЙ ИНЖЕНЕР-ЭЛЕКТРОНЩИК. СТУДЕНТ ФТФ КУБГУ
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                       
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="gradient_section_revers text-white py-12 sm:py-16">
              <div className="container mx-auto items-center space-y-6 sm:space-y-8 md:space-y-0">
                <div className="mx-4 w-full border-1 border-[#a1a19f]"></div>
              </div>
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-6 sm:space-y-8 md:space-y-0">
                    <div className="w-full md:ml-16 order-2 md:order-1">
                        <p className="w-full md:w-4/5 text-xl sm:text-2xl md:text-3xl font-normal font-primary text-white mb-4 text-center md:text-left">
                            ХОТИТЕ ПОМОЧЬ ПРОЕКТУ ИЛИ ДАТЬ СОВЕТ?
                        </p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full md:w-2/3 font-normal font-primary text-hover mb-4 text-center md:text-left">СВЯЖИТЕСЬ С НАМИ!</h2>
                        <div className="flex justify-center md:justify-start">
                            <Link 
                                to="/contacts" 
                                className="bg-white hover:bg-hover text-black text-lg sm:text-xl font-primary font-[600] w-full sm:w-auto py-3 px-6 rounded-4xl inline-block transition-colors duration-200 cursor-pointer text-center"
                            >
                                КОНТАКТЫ
                            </Link>
                        </div>
                    </div>
                    <div className="w-full flex justify-center order-1 md:order-2">
                        <img
                            src="./img/1.png"
                            alt="Грейферная кисть «ФАЛАНГА - 2»"
                            className="w-3/4 sm:w-2/3 md:w-2/3 rotate-180"
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
