/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

const supportedLanguages = ['en'];

const baseEn = {
  howItWorks: 'How It Works',
  contactUs: 'Contact Us',
  faq: 'FAQ',
  about: 'About',
  aboutUs: 'About Us',
  stories: 'Stories',
  blog: 'Blog',
  sustainability: 'Sustainability',
  careers: 'Careers',
  safetyTrust: 'Safety & Trust',
  teamMember: 'Our Team',
  signIn: 'Sign In',
  getStarted: 'Get Started',
  language: 'Language',

  home: {
    toggle: { guest: 'Looking for Rides', host: 'Want to Offer Rides' },
    guest: {
      badge: 'Save up to 60% on your daily commute',
      title1: 'Find Rides.',
      title2: 'Share Costs.',
      title3: 'Build Community.',
      //description: 'Affordable rides, Safer trips, stay connected.',
      cta: 'Find a Ride',
      features: [
        { title: 'Smart Route Matching', desc: 'AI-powered matching finds your perfect ride' },
        { title: 'Transparent Pricing', desc: 'No hidden fees, just fair shared costs' },
        { title: 'Verified Drivers', desc: 'Bank-level verification for every host' },
        { title: 'Rated Community', desc: 'Travel with drivers rated 4.5 stars and up' },
      ],
      stats: ['Safe Rides Shared', 'Saved Together', 'Average Rating'],
    },
    host: {
      badge: 'Earn while you commute',
      title1: 'Offer Rides.',
      title2: 'Earn Income.',
      title3: 'Build Your Business.',
      //description: 'Turn your daily commute into income. Earn NGN 500-NGN 2000 per trip while helping others save on costs.',
      cta: 'Offer a Ride',
      features: [
        { title: 'Easy Income', desc: 'Earn NGN 500-NGN 2000 per trip instantly' },
        { title: 'Simple Onboarding', desc: 'KYC verified and earning in 24 hours' },
        { title: 'Passenger Care', desc: 'Automated insurance on every ride' },
        { title: 'Fast Payouts', desc: 'Weekly withdrawals to your bank account' },
      ],
      stats: ['Earned by Hosts', 'Active Hosts', 'Verified Safety'],
    },
    learnMore: 'Learn More',
    tracking: {
      title: 'Real-Time Ride Tracking',
      guest: {
        desc: 'Know exactly where your driver is. Share your ride link with trusted contacts for added safety.',
        1: { title: 'Live GPS Tracking', desc: 'Watch your driver approach in real-time on the interactive map' },
        2: { title: 'Share Your Route', desc: 'Send ride details to family and friends instantly' },
        3: { title: 'Emergency SOS Button', desc: 'One-tap emergency contact if you need immediate help' },
        4: { title: 'Driver Profile & Rating', desc: 'See driver ratings, vehicle details, and past reviews' },
      },
      host: {
        desc: 'Monitor all your active rides. Get rider details and real-time navigation to pickup points.',
        1: { title: 'Smart Navigation', desc: 'Get optimized routes and real-time traffic updates for efficiency' },
        2: { title: 'Rider Details & Ratings', desc: 'See who is booking your ride and their safety rating' },
        3: { title: 'Real-Time Earnings', desc: 'Track your earnings for each trip instantly' },
        4: { title: 'Mobile Notifications', desc: 'Get instant alerts for new ride requests and confirmations' },
      },
    },
    comfort: {
      guest: {
        title: 'Ride in Comfort',
        desc: 'Modern vehicles with amenities you will love',
        1: { title: 'Premium Audio', desc: 'Enjoy music during your ride' },
        2: { title: 'Child Safety Locks', desc: 'Protected transport for families' },
        3: { title: 'Clean Interior', desc: 'Professional detailing and maintenance' },
        4: { title: 'Verified Drivers', desc: 'Background checked professionals' },
      },
      host: {
        title: 'Attract Quality Riders',
        desc: 'Premium features for hosts',
        1: { title: 'High Visibility', desc: 'Featured in app for quality drivers' },
        2: { title: 'Loyalty Rewards', desc: 'Earn bonus for consistent hosting' },
        3: { title: 'Support Team', desc: '24/7 dedicated driver support' },
        4: { title: 'Driver App Suite', desc: 'Powerful tools to manage your routes' },
      },
    },
    download: {
      title: "It's easier in the apps",
      0: { title: 'Download the FeyRide Guest app', desc: 'Scan to download' },
      1: { title: 'Download the FeyRide Host app', desc: 'Scan to download' },
    },
    routes: {
      title: 'Popular Routes This Week',
      desc: 'See where {who} are heading',
      riders: 'riders',
      drivers: 'drivers',
      bookNow: 'Book Now',
      similarRoute: 'Similar Route',
    },
    testimonials: {
      readMore: 'Read More Stories',
    },
    safety: {
      title: 'Your Safety is Our Priority',
      desc: 'Multi-step verification, real-time monitoring, 24/7 emergency support, and insurance on every ride.',
      items: [
        // { title: 'ID + Selfie Verification', desc: 'Every user undergoes rigorous verification' },
        { title: 'Real-time Trip Tracking', desc: 'Live GPS monitoring on every ride' },
        { title: '24/7 SOS Support', desc: 'Emergency help just one tap away' },
        { title: 'Two-way Rating System', desc: 'Build trust through community feedback' },
      ],
      learnMore: 'Learn About Safety',
    },
    finalCta: {
      guest: {
        title: 'Ready to Save Big on Your Daily Commute?',
        desc: 'Join thousands saving up to 60% on commute costs. Start your first ride today.',
        cta: 'Find a Ride',
        learnMore: 'See How It Works',
      },
      host: {
        title: 'Ready to Turn Your Car into Income?',
        desc: 'Join hosts earning per trip. Start earning today.',
        cta: 'Become a Host',
        learnMore: 'Learn More',
      },
    },
  },

  footer: {
    brand: 'Share rides. Share costs. Share good vibes.',
    address: 'Lagos, Nigeria',
    call: '',
    email: '',
    forGuests: 'For Guests',
    forHosts: 'For Hosts',
    company: 'Company',
    findRide: 'Find a Ride',
    howItWorks: 'How It Works',
    safety: 'Safety',
    pricing: 'Pricing',
    postRoute: 'Post a Route',
    trustSafety: 'Trust & Safety',
    earnings: 'Earnings',
    about: 'About',
    faq: 'FAQ',
    blog: 'Blog',
    contact: 'Contact',
    getInTouch: 'Get in Touch',
    helpText: 'Have questions? We are always here to help you.',
    sendMessage: 'Send Message',
    downloadApp: 'Download the App',
    downloadText: 'Get FeyRide on your phone and start sharing rides in minutes.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    copyright: 'All rights reserved.',
  },
};

const translations = {
  en: baseEn,
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('feyride-language');
    return storedLanguage && supportedLanguages.includes(storedLanguage) ? storedLanguage : 'en';
  });

  useEffect(() => {
    localStorage.setItem('feyride-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      supportedLanguages,
      t: (key, vars) => {
        const getNested = (obj, path) => path.split('.').reduce((acc, seg) => (acc ? acc[seg] : undefined), obj);
        let result = getNested(translations[language], key) ?? getNested(translations.en, key) ?? key;

        if (typeof result === 'string' && vars) {
          Object.entries(vars).forEach(([k, v]) => {
            result = result.replace(`{${k}}`, v);
          });
        }

        return result;
      },
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}

