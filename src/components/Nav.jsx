import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Nav() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < lastScrollY || currentScrollY < 100) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        // Close mobile menu on route change
        setMobileOpen(false);
    }, [location.pathname]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-primary transition-transform duration-300 ease-in-out ${
            isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}>
            <div className="flex justify-between items-center py-8 px-16">
                {/* Brand */}
                <Link
                    to="/"
                    className="flex items-center text-white hover:text-hover font-bold shrink-0"
                >
                    <img
                        src="/img/media/logo/l2.png"
                        alt="Logo ARTEVO BIONICS"
                        className="h-10 sm:h-12 w-auto object-contain shrink-0"
                    />
                </Link>

                {/* Desktop menu */}
                <ul className="hidden md:flex space-x-16 text-white">
                    <li>
                        <NavLink to="/about" className={({ isActive }) =>
                            `hover:text-hover font-primary text-xl transition-colors duration-200 ${isActive ? 'text-yellow-400 pb-2 border-b-2 border-yellow-400' : 'text-white'}`
                        }>
                            О ПРОЕКТЕ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/news" className={({ isActive }) =>
                            `hover:text-hover font-primary text-xl transition-colors duration-200 ${isActive ? 'text-yellow-400 pb-2 border-b-2 border-yellow-400' : 'text-white'}`
                        }>
                            НОВОСТИ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/company" className={({ isActive }) =>
                            `hover:text-hover font-primary text-xl transition-colors duration-200 ${isActive ? 'text-yellow-400 pb-2 border-b-2 border-yellow-400' : 'text-white'}`
                        }>
                            КОМПАНИЯ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" className={({ isActive }) =>
                            `hover:text-hover font-primary text-xl transition-colors duration-200 ${isActive ? 'text-yellow-400 pb-2 border-b-2 border-yellow-400' : 'text-white'}`
                        }>
                            КОНТАКТЫ
                        </NavLink>
                    </li>
                </ul>

                {/* Desktop CTA */}
                <NavLink to="/submit" className="hidden md:inline-block bg-white hover:bg-hover text-black text-xl font-primary font-[600] py-2 px-4 rounded-4xl">
                    ОСТАВИТЬ ЗАЯВКУ
                </NavLink>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-white border border-white/30 rounded-xl px-3 py-2"
                    aria-label="Меню"
                    onClick={() => setMobileOpen(v => !v)}
                >
                    {mobileOpen ? 'Закрыть' : 'Меню'}
                </button>
            </div>

            {/* Mobile menu panel */}
            {mobileOpen && (
                <div className="md:hidden px-6 pb-6">
                    <div className="flex flex-col space-y-4 text-white">
                        <NavLink to="/about" className="font-primary text-lg">О ПРОЕКТЕ</NavLink>
                        <NavLink to="/news" className="font-primary text-lg">НОВОСТИ</NavLink>
                        <NavLink to="/company" className="font-primary text-lg">КОМПАНИЯ</NavLink>
                        <NavLink to="/contacts" className="font-primary text-lg">КОНТАКТЫ</NavLink>
                        <NavLink to="/submit" className="bg-white hover:bg-hover text-black text-lg font-primary font-[600] py-2 px-4 rounded-4xl w-fit">ОСТАВИТЬ ЗАЯВКУ</NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}
