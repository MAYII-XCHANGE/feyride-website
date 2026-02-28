import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import Button from './Button';
import logo from '../assets/Feyride Logo.svg';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const aboutMenuRef = useRef(null);
  const languageMenuMobileRef = useRef(null);
  const languageMenuDesktopRef = useRef(null);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t('howItWorks'), href: '/how-it-works' },
    { label: t('contactUs'), href: '/contact' },
    { label: t('faq'), href: '/faq' },
  ];

  const aboutLinks = [
    { label: t('aboutUs'), href: '/about' },
    { label: t('teamMember'), href: '/team' },
    { label: t('blog'), href: '/blog' },
    { label: t('stories'), href: '/stories' },
    { label: t('careers'), href: '/careers' },
    { label: t('sustainability'), href: '/sustainability' },
    { label: t('safetyTrust'), href: '/safety' },
  ];

  const languageOptions = [
    { code: 'en', label: 'English' },
  ];

  // App store links
  const appStoreLinks = {
    ios: 'https://apps.apple.com/ng/app/FeyRide-rides/id1234567890',
    android: 'https://play.google.com/store/apps/details?id=com.FeyRiderider.app',
  };

  // Detect device and redirect to appropriate store
  const handleAppDownload = (e) => {
    e.preventDefault();
    
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);

    if (isIOS) {
      window.location.href = appStoreLinks.ios;
    } else if (isAndroid) {
      window.location.href = appStoreLinks.android;
    } else {
      // Desktop - show both options or default to Google Play
      window.location.href = appStoreLinks.android;
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (aboutMenuRef.current && !aboutMenuRef.current.contains(event.target)) {
        setIsAboutOpen(false);
      }

      const clickedInsideMobileLanguage = languageMenuMobileRef.current?.contains(event.target);
      const clickedInsideDesktopLanguage = languageMenuDesktopRef.current?.contains(event.target);

      if (!clickedInsideMobileLanguage && !clickedInsideDesktopLanguage) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setIsAboutOpen(false);
    setIsLanguageOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-nova-charcoal text-white border-b border-nova-green/50 shadow-md">
      <div className="container-custom py-4 relative md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <img
              src={logo}
              alt="FeyRide Logo"
              className="h-19 w-auto animate-float transition-transform duration-300 hover:scale-105 hover:-rotate-1"
            />
          </Link>

          <button
            type="button"
            className="md:hidden p-2 text-nova-green hover:text-nova-green-light transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`absolute inset-x-0 top-full z-20 px-6 py-5 bg-nova-charcoal border-b border-nova-green/50 shadow-md transition-all duration-300 ease-in-out md:static md:z-auto md:p-0 md:bg-transparent md:border-0 md:shadow-none md:flex md:items-center md:gap-8 md:translate-x-0 md:opacity-100 ${
            isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none md:pointer-events-auto'
          }`}
        >
          <nav className="flex flex-col md:flex-row md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="py-2 md:py-0 text-nova-green hover:text-nova-green-light transition font-medium"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}

            <div className="relative" ref={aboutMenuRef}>
              <button
                type="button"
                className="w-full md:w-auto py-2 md:py-0 text-left text-nova-green hover:text-nova-green-light transition font-medium inline-flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={isAboutOpen}
                onClick={() => {
                  setIsAboutOpen((prev) => !prev);
                  setIsLanguageOpen(false);
                }}
              >
                {t('about')}
                <ChevronDown className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`${isAboutOpen ? 'block' : 'hidden'} mt-1 md:mt-2 md:absolute md:left-0 md:min-w-[11rem] md:rounded-lg md:border md:border-nova-green/30 md:bg-nova-charcoal md:shadow-lg`}
              >
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block py-2 px-3 md:px-4 text-sm text-nova-green hover:text-nova-green-light hover:bg-nova-green/10 transition"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="mt-3 md:hidden" ref={languageMenuMobileRef}>
            <button
              type="button"
              className="w-full inline-flex items-center justify-between py-2 text-nova-green hover:text-nova-green-light transition font-medium"
              aria-label="Select language"
              aria-expanded={isLanguageOpen}
              onClick={() => setIsLanguageOpen((prev) => !prev)}
            >
              <span className="inline-flex items-center gap-2">
                <Globe className="w-5 h-5" />
                {t('language')}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`${isLanguageOpen ? 'block' : 'hidden'} mt-2 rounded-lg border border-nova-green/30 bg-nova-charcoal`}> 
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => {
                    setLanguage(option.code);
                    setIsLanguageOpen(false);
                  }}
                  className={`w-full text-left py-2 px-3 text-sm transition ${language === option.code ? 'text-nova-green-light bg-nova-green/10' : 'text-nova-green hover:text-nova-green-light hover:bg-nova-green/10'}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-nova-green/30 flex flex-col gap-3 md:hidden">
            <Button variant="outline" size="md" onClick={handleAppDownload} className="w-full">
              {t('signIn')}
            </Button>
            <Button variant="primary" size="md" onClick={handleAppDownload} className="w-full">
              {t('getStarted')}
            </Button>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative" ref={languageMenuDesktopRef}>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-1 p-2 rounded-full text-nova-green hover:text-nova-green-light hover:bg-nova-green/10 transition"
              aria-label="Select language"
              aria-expanded={isLanguageOpen}
              onClick={() => setIsLanguageOpen((prev) => !prev)}
            >
              <Globe className="w-5 h-5" />
              <ChevronDown className={`w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`${isLanguageOpen ? 'block' : 'hidden'} absolute right-0 mt-2 min-w-[9rem] rounded-lg border border-nova-green/30 bg-nova-charcoal shadow-lg`}>
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => {
                    setLanguage(option.code);
                    setIsLanguageOpen(false);
                  }}
                  className={`w-full text-left py-2 px-4 text-sm transition ${language === option.code ? 'text-nova-green-light bg-nova-green/10' : 'text-nova-green hover:text-nova-green-light hover:bg-nova-green/10'}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          <Button 
            variant="outline" 
            size="md"
            onClick={handleAppDownload}
          >
            {t('signIn')}
          </Button>
          <Button 
            variant="primary" 
            size="md"
            onClick={handleAppDownload}
          >
            {t('getStarted')}
          </Button>
        </div>
      </div>
    </header>
  );
}



