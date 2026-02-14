import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/testimonials', label: t('nav.testimonials') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100'}`}>
        <div className="bg-dark text-white py-2">
          <div className="container-luxury flex justify-between items-center">
            <div className="flex items-center gap-6 text-sm">
              <a href="tel:+998919772791" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" />
                <span>+998 91 977 27 91</span>
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <span className="hidden sm:inline text-gray-300">Tashkent, Uzbekistan</span>
            </div>
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="lang-switcher text-white">
                <button
                  onClick={() => changeLanguage('en')}
                  className={i18n.language === 'en' ? 'active' : 'hover:text-gold'}
                >
                  EN
                </button>
                <span className="text-gray-500">|</span>
                <button
                  onClick={() => changeLanguage('ru')}
                  className={i18n.language === 'ru' ? 'active' : 'hover:text-gold'}
                >
                  RU
                </button>
                <span className="text-gray-500">|</span>
                <button
                  onClick={() => changeLanguage('uz')}
                  className={i18n.language === 'uz' ? 'active' : 'hover:text-gold'}
                >
                  UZ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'top-0 bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'top-10 bg-transparent py-4'
        }`}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className={`font-display text-2xl md:text-3xl font-semibold transition-colors ${isScrolled ? 'text-dark' : 'text-white'}`}>
                Dr. <span className="text-gold">Jasurjon</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${isScrolled ? 'text-dark' : 'text-white'} ${
                    isActive(link.path) ? 'text-gold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/portal"
                className={`text-sm font-body tracking-wider uppercase transition-colors ${
                  isScrolled ? 'text-dark hover:text-gold' : 'text-white hover:text-gold'
                }`}
              >
                {t('nav.portal')}
              </Link>
              <Link
                to="/contact"
                className="btn-primary flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                {t('hero.cta')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-dark' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="container-luxury py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-body py-2 border-b border-gray-100 ${
                    isActive(link.path) ? 'text-gold' : 'text-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/portal"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-body py-2 text-dark"
              >
                {t('nav.portal')}
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-center mt-4"
              >
                {t('hero.cta')}
              </Link>
            </div>

            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-100">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 text-sm uppercase ${i18n.language === 'en' ? 'text-gold font-semibold' : 'text-gray-500'}`}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage('ru')}
                className={`px-3 py-1 text-sm uppercase ${i18n.language === 'ru' ? 'text-gold font-semibold' : 'text-gray-500'}`}
              >
                Русский
              </button>
              <button
                onClick={() => changeLanguage('uz')}
                className={`px-3 py-1 text-sm uppercase ${i18n.language === 'uz' ? 'text-gold font-semibold' : 'text-gray-500'}`}
              >
                O\'zbek
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
