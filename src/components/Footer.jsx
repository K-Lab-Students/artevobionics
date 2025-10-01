import React from 'react'

export default function Footer() {
  return (
    <>
      {/* Footer */}
            <footer className="bg-second text-white py-6 sm:py-8">
                <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
                    <div className="flex flex-col items-center sm:items-start space-y-4">
                        <div className="flex items-center space-x-6 sm:space-x-8">
                            <img
                                src="/img/media/logo/l3.png"
                                alt="Artevo Bionics Logo"
                                className="h-14 sm:h-18 w-auto object-contain"
                            />
                            <img
                                src="/img/media/logo/l4.png"
                                alt="Robotics Lab Logo"
                                className="h-8 sm:h-12 w-auto object-contain"
                            />
                            <img
                                src="/img/media/logo/l1.png"
                                alt="Innovation Fund Logo"
                                className="h-16 sm:h-20 w-auto object-contain"
                            />
                        </div>
                        <p className="text-sm font-primary text-white text-center sm:text-left">
                            2025 АРТЭВО БИОНИКС
                        </p>
                    </div>
                    <div className="text-center sm:text-right">
                        <p className="text-xs sm:text-sm font-primary text-white">
                            ООО «АРТЭВО БИОНИКС» (ОГРН 4167893778839) 35000
                            <br />
                            г. Краснодар, ул. Селезнева 3478
                            <br />
                            +7 (918) 123 45 56
                        </p>
                    </div>
                </div>
            </footer>
    </>
  )
}
