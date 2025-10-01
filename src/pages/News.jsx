import React from "react";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function News() {

    return (
        <div>
            {/* News Section */}
            <section className="pt-32 sm:pt-40 bg-primary pb-16">
                <div className="container mx-auto px-4">
                    <h2 className="font-second text-3xl sm:text-4xl md:text-5xl font-bold text-hover mb-16 sm:mb-32 overflow-visible whitespace-nowrap">
                        НОВОСТИ ПРОЕКТА
                    </h2>
                    

                    {/* Mobile Layout */}
                    <div className="md:hidden">
                        <div className="relative">
                            {/* Timeline line - positioned at left edge */}
                            <div className="absolute left-2 w-1 h-full bg-hover"></div>

                            {/* News items */}
                            <div className="space-y-8 pl-8">
                                {/* First news item */}
                                <div className="news-item">
                                    <div className="mb-4">
                                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                                            <div style={{width: '100%', height: '192px', backgroundColor: '#f0f0f0', border: '2px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                <img 
                                                    src="/img/news/old.jpg" 
                                                    alt="Демонстрация первого прототипа Фаланга - 1" 
                                                    style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover'}}
                                                    onError={(e) => {
                                                        console.error('Ошибка загрузки изображения:', e.target.src);
                                                        e.target.parentElement.innerHTML = '<div style="color: #ff0000; text-align: center;">Ошибка загрузки изображения</div>';
                                                    }}
                                                    onLoad={() => console.log('Изображение загружено:', '/img/news/old.jpg')}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <p className="text-lg text-hover font-primary mb-2">
                                            9 ДЕКАБРЯ 2022
                                        </p>
                                        <p className="text-sm text-white font-primary">
                                            Демонстрация первого прототипа
                                            «Фаланга - 1»
                                        </p>
                                    </div>
                                </div>

                                {/* Second news item */}
                                <div className="news-item">
                                    <div className="mb-4">
                                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                                            <div style={{width: '100%', height: '192px', backgroundColor: '#f0f0f0', border: '2px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                <img 
                                                    src="/img/news/congress.jpg" 
                                                    alt="Участие в выставке на III Конгрессе молодых учёных в Сириусе" 
                                                    style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover'}}
                                                    onError={(e) => {
                                                        console.error('Ошибка загрузки изображения:', e.target.src);
                                                        e.target.parentElement.innerHTML = '<div style="color: #ff0000; text-align: center;">Ошибка загрузки изображения</div>';
                                                    }}
                                                    onLoad={() => console.log('Изображение загружено:', '/img/news/congress.jpg')}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <p className="text-lg text-hover font-primary mb-2">
                                            28 ноября 2023
                                        </p>
                                        <p className="text-sm text-white font-primary">
                                            Участие в выставке на III Конгрессе
                                            молодых учёных в Сириусе
                                        </p>
                                    </div>
                                </div>

                                {/* Third news item */}
                                <div className="news-item">
                                    <div className="mb-4">
                                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                                            <div style={{width: '100%', height: '192px', backgroundColor: '#f0f0f0', border: '2px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                <img 
                                                    src="/img/news/bioprom.jpg" 
                                                    alt="Создание прототипа второй ревизии устройства, участие в выставке БИОПРОМ в г. Геленджик" 
                                                    style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover'}}
                                                    onError={(e) => {
                                                        console.error('Ошибка загрузки изображения:', e.target.src);
                                                        e.target.parentElement.innerHTML = '<div style="color: #ff0000; text-align: center;">Ошибка загрузки изображения</div>';
                                                    }}
                                                    onLoad={() => console.log('Изображение загружено:', '/img/news/bioprom.jpg')}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <p className="text-lg text-hover font-primary mb-2">
                                            7 октября 2024
                                        </p>
                                        <p className="text-sm text-white font-primary">
                                            Создание прототипа второй ревизии
                                            устройства, участие в выставке «БИОПРОМ»
                                            в г. Геленджик
                                        </p>
                                    </div>
                                </div>

                
                            </div>
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-full bg-hover"></div>

                            {/* News items */}
                            <div className="space-y-12">

                                {/* First news item */}
                                <div className="news-item flex justify-between gap-25">
                                    <div className="w-1/2 flex items-center justify-end">
                                        <div className="p-6">
                                            <p className="text-xl text-right text-hover font-primary">
                                                9 ДЕКАБРЯ 2022
                                            </p>
                                            <p className="text-base text-right text-white font-primary">
                                                Демонстрация первого прототипа
                                                <br />«Фаланга - 1»
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-1/2 flex justify-start">
                                        <div className="p-6 w-128 h-96">
                                          <div className="bg-white h-full rounded-4xl shadow-md flex justify-center items-center overflow-hidden">
                                              <img 
                                                src="/img/news/old.jpg" 
                                                alt="Titanfall - футуристические боевые роботы" 
                                                style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px'}}
                                              />
                                          </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Second news item */}
                                <div className="news-item flex justify-between gap-25">
                                    <div className="w-1/2 flex justify-end">
                                        <div className="p-6 w-128 h-96">
                                          <div className="bg-white h-full rounded-4xl shadow-md flex justify-center items-center overflow-hidden">
                                              <img 
                                                src="/img/news/congress.jpg" 
                                                alt="Участие в выставке на III Конгрессе молодых учёных в Сириусе" 
                                                style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px'}}
                                              />
                                          </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 flex items-center">
                                        <div className="p-6">
                                            <p className="text-xl text-left text-hover font-primary">
                                                28 ноября 2023
                                            </p>
                                            <p className="text-base text-left text-white font-primary">
                                                Участие в выставке на III Конгрессе<br />молодых учёных в Сириусе
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Third news item */}
                                <div className="news-item flex justify-between gap-25">
                                    <div className="w-1/2 flex justify-end items-center">
                                        <div className="p-6">
                                            <p className="text-xl text-right text-hover font-primary">
                                                7 октября 2024
                                            </p>
                                            <p className="text-base text-right text-white font-primary">
                                                Создание прототипа второй ревизии<br/>
                                                устройства, участие в выставке «БИОПРОМ»<br/>в г. Геленджик
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-1/2 flex justify-start">
                                        <div className="p-6 w-128 h-96">
                                          <div className="bg-white h-full rounded-4xl shadow-md flex justify-center items-center overflow-hidden">
                                              <img 
                                                src="/img/news/bioprom.jpg" 
                                                alt="Titanfall - футуристические боевые роботы" 
                                                style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px'}}
                                              />
                                          </div>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-16 container mx-auto items-center space-y-8 md:space-y-0">
                    <div className="mx-4 w-full border-1 border-[#a1a19f]"></div>
                </div>

            </section>

            <Contact />

            <Footer />
        </div>
    );
}
