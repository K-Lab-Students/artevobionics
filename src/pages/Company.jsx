import React from "react";
import Footer from "../components/Footer";

export default function Company() {
    return (
        <div>
            {/* Company Section */}
            <section className="pt-24 sm:pt-32 bg-primary min-h-screen pb-16">
                <div className="container mx-auto px-4">
                    {/* Mobile Layout */}
                    <div className="md:hidden">
                        <h2 className="font-second text-3xl sm:text-4xl font-bold text-hover mb-6 text-left">
                            КОМПАНИЯ
                        </h2>

                        <div className="mb-6">
                            <p className="text-left font-primary text-sm sm:text-base text-hover mb-4">
                                ИНФОРМАЦИЯ ОБ ОРГАНИЗАЦИИ
                            </p>
                        </div>

                        <div className="bg-second rounded-3xl mb-8">
                            <p className="px-4 py-6 text-left font-primary text-sm sm:text-base">
                                ООО «АРТЭВО БИОНИКС» (ОГРН 4167893778839)<br/>
                                ИНН 2312330551<br/>
                                КПП 231201001<br/>
                                Юр. адрес: 35000 г. Краснодар, ул. Селезнева 150, кв. 733<br/><br/>
                                Деятельность осуществляется при грантовой и<br/>
                                информационной поддержке Фонда содействия<br/>
                                развитию малых форм предприятий в<br/>
                                научно-технической сфере и Лаборатории робототехники и<br/>
                                мехатроники Кубанского государственного университета
                            </p>
                        </div>

                        <div className="bg-second rounded-3xl overflow-hidden mb-8">
                            <img
                                src="/img/danil.jpg"
                                alt="Фото руководителя"
                                className="w-full h-64 sm:h-80 object-cover"
                            />
                        </div>

                        <div className="text-center">
                            <h3 className="font-second text-lg sm:text-xl font-bold text-hover mb-4">
                                ДРАГУНОВ ДАНИИЛ
                            </h3>
                            <p className="text-center font-primary text-sm sm:text-base">
                            CEO. ИНЖЕНЕР-КОНСТРУКТОР. СТУДЕНТ ФТФ КУБГУ
                            </p>
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                        <h2 className="font-second text-4xl md:text-5xl font-bold text-hover mb-8 overflow-visible whitespace-nowrap">
                            КОМПАНИЯ
                        </h2>

                        <div className="flex justify-between">
                            <div className="w-1/2"><p className="text-left font-primary text-base ">ИНФОРМАЦИЯ ОБ ОРГАНИЗАЦИИ</p></div>
                            <div className="w-1/2"><p className="text-left font-primary text-base ml-32">УПРАВЛЕНИЕ</p></div>
                        </div>

                        <div className="flex mt-8">
                            <div className="w-1/2 bg-second rounded-3xl"><p className="px-5 py-10 text-left font-primary text-base ">
                              ООО «АРТЭВО БИОНИКС» (ОГРН 4167893778839)<br/>
                              ИНН 2312330551<br/>
                              КПП 231201001<br/>
                              Юр. адрес: 35000 г. Краснодар, ул. Селезнева 150, кв. 733<br/><br/>
                              Деятельность осуществляется при грантовой и<br/>
                              информационной поддержке Фонда содействия<br/>
                              развитию малых форм предприятий в<br/>
                              научно-технической сфере и Лаборатории робототехники и<br/>
                              мехатроники Кубанского государственного университета
                              </p></div>
                            <div className="ml-8 w-1/4 bg-second rounded-3xl overflow-hidden flex items-center justify-center">
                              <img
                                src="/img/danil.jpg"
                                alt="Фото руководителя"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="ml-8 w-1/4">
                              <h2 className="font-second text-xl md:text-2xl font-bold text-hover mb-8 overflow-visible whitespace-nowrap">
                                ДРАГУНОВ ДАНИИЛ
                              </h2>
                              <p className="text-left font-primary text-base">
                              CEO. ИНЖЕНЕР-КОНСТРУКТОР. СТУДЕНТ ФТФ КУБГУ
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
