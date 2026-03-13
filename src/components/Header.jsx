import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, ChevronDown, Globe, Menu, Phone, ShieldAlert, X } from 'lucide-react';
import Button from './Button';
import logo from '../assets/Feyride Logo.svg';
import { useLanguage } from '../context/LanguageContext';
import { redirectToStoreByDevice } from '../utils/appStoreRedirect';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isSosOpen, setIsSosOpen] = useState(false);
  const aboutMenuRef = useRef(null);
  const languageMenuMobileRef = useRef(null);
  const languageMenuDesktopRef = useRef(null);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { label: 'Home', href: '/', end: true },
    { label: t('howItWorks'), href: '/how-it-works', end: false },
    { label: t('contactUs'), href: '/contact', end: false },
    { label: t('faq'), href: '/faq', end: false },
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
  const navBaseClass = 'py-2 md:py-1.5 px-0 md:px-1 border-b-[3px] border-transparent transition-all duration-300 font-medium';

  const isAboutActive = aboutLinks.some(
    (link) => location.pathname === link.href || location.pathname.startsWith(`${link.href}/`),
  );

  const handleAppDownload = (e) => {
    e.preventDefault();
    redirectToStoreByDevice();
  };

  const openSosModal = () => {
    setIsSosOpen(true);
    setIsOpen(false);
    setIsAboutOpen(false);
    setIsLanguageOpen(false);
  };

  const handleOpenSupportChat = () => {
    setIsSosOpen(false);
    window.dispatchEvent(new Event('open-support-chat'));
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

    document.addEventListener('pointerdown', handleOutsideClick);
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setIsOpen(false);
      setIsAboutOpen(false);
      setIsLanguageOpen(false);
      setIsSosOpen(false);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname]);

  useEffect(() => {
    if (!isSosOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsSosOpen(false);
      }
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isSosOpen]);

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
              className="h-10 w-auto transition-transform duration-300 hover:scale-105 hover:-rotate-1"
              loading="lazy"
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
          className={`absolute inset-x-0 top-full z-20 px-6 py-5 bg-nova-charcoal border-b border-nova-green/50 shadow-md transition-[transform,opacity] duration-300 ease-in-out md:static md:z-auto md:p-0 md:bg-transparent md:border-0 md:shadow-none md:flex md:items-center md:gap-8 md:translate-x-0 md:opacity-100 ${
            isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none md:pointer-events-auto'
          }`}
        >
          <nav className="flex flex-col md:flex-row md:items-center md:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.end}
                className={({ isActive }) =>
                  `${navBaseClass} ${
                    isActive
                      ? 'text-white border-white'
                      : 'text-nova-green border-transparent hover:text-nova-green-light hover:border-nova-green-light'
                  }`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}

            <div className="relative" ref={aboutMenuRef}>
              <button
                type="button"
                className={`w-full md:w-auto text-left inline-flex items-center gap-1 ${navBaseClass} ${
                  isAboutActive
                    ? 'text-white border-white'
                    : 'text-nova-green border-transparent hover:text-nova-green-light hover:border-nova-green-light'
                }`}
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
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className={({ isActive }) =>
                      `block py-2 px-3 md:px-4 text-sm transition-all duration-300 border-b-[3px] border-transparent ${isActive ? "text-white border-white" : "text-nova-green hover:text-nova-green-light hover:border-nova-green-light"}`
                    }
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
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
            <button
              type="button"
              onClick={openSosModal}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-red-400/60 bg-red-500/10 px-4 py-3 font-semibold text-red-200 hover:bg-red-500/20 transition"
            >
              <ShieldAlert className="w-5 h-5" />
              SOS Alert
            </button>
            <Button variant="outline" size="md" onClick={handleAppDownload} className="w-full">
              {t('signIn')}
            </Button>
            <Button variant="primary" size="md" onClick={handleAppDownload} className="w-full">
              {t('getStarted')}
            </Button>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={openSosModal}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-red-400/60 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-200 hover:bg-red-500/20 transition"
            aria-label="Open safety SOS alert options"
          >
            <ShieldAlert className="w-4 h-4" />
            SOS
          </button>
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

      {isSosOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm px-4 py-8"
          onClick={() => setIsSosOpen(false)}
          role="presentation"
        >
          <div
            className="mx-auto flex min-h-full max-w-xl items-center"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="sos-alert-title"
          >
            <div className="w-full rounded-2xl border border-red-400/30 bg-nova-charcoal text-white shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5">
                <div>
                  <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
                    <AlertTriangle className="h-8 w-8" />
                    Emergency Support
                  </p>
                  {/* <h2 id="sos-alert-title" className="text-xl font-bold">
                    Trigger SOS response
                  </h2> */}
                  <p className="mt-2 text-sm text-white/75">
                    If a rider or passenger is at risk, use one of these actions immediately.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSosOpen(false)}
                  className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white transition"
                  aria-label="Close SOS dialog"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4 px-6 py-6">
                <a
                  href="tel:112"
                  className="flex items-start gap-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-4 hover:bg-red-500/20 transition"
                >
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-300" />
                  <div>
                    <p className="font-semibold text-white">Call emergency services</p>
                    <p className="mt-1 text-sm text-white/75">
                      Use your local emergency line immediately if there is an active threat.
                    </p>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleOpenSupportChat}
                  className="flex w-full items-start gap-4 rounded-xl border border-nova-green/30 bg-nova-green/10 px-4 py-4 text-left hover:bg-nova-green/20 transition"
                >
                  <ShieldAlert className="mt-0.5 h-5 w-5 flex-shrink-0 text-nova-green-light" />
                  <div>
                    <p className="font-semibold text-white">Alert FeyRide support</p>
                    <p className="mt-1 text-sm text-white/75">
                      Open the support chat right away so the team can respond and guide next steps.
                    </p>
                  </div>
                </button>

                <Link
                  to="/safety"
                  onClick={() => setIsSosOpen(false)}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-4 hover:bg-white/10 transition"
                >
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-nova-green-light" />
                  <div>
                    <p className="font-semibold text-white">Open safety guidance</p>
                    <p className="mt-1 text-sm text-white/75">
                      Review the in-platform safety steps and what to do during a trip incident.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}



