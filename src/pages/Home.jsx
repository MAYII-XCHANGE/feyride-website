import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, CreditCard, CheckCircle, Search, Users, DollarSign, Shield, Star, TrendingDown, Leaf, Clock, ArrowRight, Zap, Heart, TrendingUp, Navigation, Wifi, Music, Zap as Battery, Wind, Smartphone, AlertCircle, Car, Gift, GiftIcon, Handshake, CalendarDays } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import Badge from '../components/Badge';
import routesData from '../data/routes.json';
import testimonialData from '../data/testimonials.json';
import guestOnboardingImage from '../assets/pexels-gustavo-fring-4895405.jpg';
import hostOnboardingImage from '../assets/pexels-tim-samuel-5835591.jpg';
import safetyImage from '../assets/pexels-cottonbro-4606336.jpg';

export default function Home() {

  const [userType, setUserType] = useState('guest');
  const [tripType, setTripType] = useState('one-way');
  const { t } = useLanguage();
  const appInfoPageUrl = 'https://www.uber.com/global/en/ride/app/?referrer=singular_click_id%3Dd250e28e-49ff-4e83-a531-5f9517c8dd54';
  const appStoreLinks = {
    ios: 'https://apps.apple.com/ng/app/FeyRide-rides/id1234567890',
    android: 'https://play.google.com/store/apps/details?id=com.FeyRiderider.app',
  };

  const handleAppDownload = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);

    if (isIOS) {
      window.location.href = appStoreLinks.ios;
      return;
    }

    if (isAndroid) {
      window.location.href = appStoreLinks.android;
      return;
    }

    window.location.href = appStoreLinks.android;
  };

  // All translation keys must be defined in LanguageContext translations
  const guestContent = {
    badge: t('home.guest.badge'),
    title: <>{t('home.guest.title1')}<br /><span className="text-gradient italic">{t('home.guest.title2')}</span><br />{t('home.guest.title3')}</>,
    description: t('home.guest.description'),
    cta: t('home.guest.cta'),
    features: [
      { icon: Search, title: t('home.guest.features.0.title'), desc: t('home.guest.features.0.desc') },
      { icon: DollarSign, title: t('home.guest.features.1.title'), desc: t('home.guest.features.1.desc') },
      { icon: Shield, title: t('home.guest.features.2.title'), desc: t('home.guest.features.2.desc') },
      { icon: Star, title: t('home.guest.features.3.title'), desc: t('home.guest.features.3.desc') },
    ],
    stats: [
      { number: '50K+', label: t('home.guest.stats.0') },
      { number: '₦2B+', label: t('home.guest.stats.1') },
      { number: '4.8★', label: t('home.guest.stats.2') },
    ],
  };

  const hostContent = {
    badge: t('home.host.badge'),
    title: <>{t('home.host.title1')}<br /><span className="text-gradient italic">{t('home.host.title2')}</span><br />{t('home.host.title3')}</>,
    description: t('home.host.description'),
    cta: t('home.host.cta'),
    features: [
      { icon: TrendingUp, title: t('home.host.features.0.title'), desc: t('home.host.features.0.desc') },
      { icon: Zap, title: t('home.host.features.1.title'), desc: t('home.host.features.1.desc') },
      { icon: Heart, title: t('home.host.features.2.title'), desc: t('home.host.features.2.desc') },
      { icon: CreditCard, title: t('home.host.features.3.title'), desc: t('home.host.features.3.desc') },
    ],
    stats: [
      { number: '50K+', label: t('home.host.stats.0') },
      { number: '₦2B+', label: t('home.host.stats.1') },
      { number: '4.8★', label: t('home.host.stats.2') },
    ],
    visual: '💼',
  };

  const currentContent = userType === 'guest' ? guestContent : hostContent;
  const quickStartContent =
    userType === 'guest'
      ? {
          image: guestOnboardingImage,
          imageAlt: 'Guest checking ride options on phone',
          title: 'Guest quick start',
          description: 'Set up your account and book your seat in minutes.',
          steps: [
            'Create your account and complete your profile.',
            'Find a nearby ride and reserve your seat.',
          ],
          secondaryAction: { label: 'Find Ride', to: '/find-ride' },
        }
      : {
          image: hostOnboardingImage,
          imageAlt: 'Host getting ready to offer rides',
          title: 'Host quick start',
          description: 'Register as a host and start connecting with riders.',
          steps: [
            'Register and complete your host setup.',
            'Find active ride demand and start hosting.',
          ],
          secondaryAction: { label: 'Post Route', to: '/post-route' },
        };

  return (
    <div className="font-light">
      {/* Hero Section */}
      <section className="bg-[#f5f5f5] py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex p-1 rounded-xl bg-white border border-nova-charcoal-lighter shadow-sm mb-8">
              <Button
                variant={userType === 'guest' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setUserType('guest')}
                className="rounded-lg"
              >
                Guest
              </Button>
              <Button
                variant={userType === 'host' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setUserType('host')}
                className="rounded-lg"
              >
                Host
              </Button>
            </div>

            <div className="mb-4">
              <Badge variant="success">{currentContent.badge}</Badge>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-nova-charcoal leading-tight mb-6">
              {currentContent.title}
            </h1>
            <p className="subheading text-nova-charcoal-700 max-w-3xl mx-auto mb-8">
              {currentContent.description}
            </p>

            <div className="flex gap-4 justify-center flex-wrap mb-10">
              <Button variant="primary" size="lg" onClick={handleAppDownload}>
                {currentContent.cta}
                <ArrowRight size={18} />
              </Button>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg">
                  {t('home.finalCta.guest.learnMore')}
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentContent.stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <p className="text-2xl font-bold text-nova-green">{stat.number}</p>
                  <p className="text-sm text-nova-charcoal-700">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <img
                src={quickStartContent.image}
                alt={quickStartContent.imageAlt}
                className="w-full h-[420px] object-cover rounded-2xl border border-nova-green/20 shadow-lg"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-nova-charcoal/30 via-transparent to-transparent"></div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="heading-2 font-display text-nova-charcoal mb-3">Start in <span className="italic">2 Steps</span></h2>
                <p className="subheading text-nova-charcoal-700">
                  Choose your path and get moving quickly to book a seat.
                </p>
              </div>

              <Card className="border border-nova-green/20">
                <h3 className="heading-5 font-display text-nova-charcoal mb-2">{quickStartContent.title}</h3>
                <p className="text-sm text-nova-charcoal-700 mb-4">{quickStartContent.description}</p>
                <ul className="space-y-2 mb-5 text-sm text-nova-charcoal-700">
                  {quickStartContent.steps.map((step) => (
                    <li key={step} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-nova-green mt-0.5 flex-shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="sm" onClick={handleAppDownload}>Register</Button>
                  {quickStartContent.secondaryAction.to === '/find-ride' ? (
                    <Button variant="outline" size="sm" onClick={handleAppDownload}>
                      {quickStartContent.secondaryAction.label}
                    </Button>
                  ) : (
                    <Link to={quickStartContent.secondaryAction.to}>
                      <Button variant="outline" size="sm">
                        {quickStartContent.secondaryAction.label}
                      </Button>
                    </Link>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Live Ride Tracking Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div>
                <h2 className="heading-2 font-display text-nova-charcoal mb-4">{t('home.tracking.title')}</h2>
                <p className="subheading text-nova-charcoal-700 mb-8">
                  {userType === 'guest'
                    ? t('home.tracking.guest.desc')
                    : t('home.tracking.host.desc')
                  }
                </p>
              </div>

              <div className="space-y-4">
                {userType === 'guest' ? (
                  <>
                    <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Navigation size={24} className="text-nova-green flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-nova-charcoal">{t('home.tracking.guest.1.title')}</p>
                        <p className="text-sm text-nova-charcoal-700">{t('home.tracking.guest.1.desc')}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <Users size={24} className="text-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-nova-charcoal">{t('home.tracking.guest.2.title')}</p>
                        <p className="text-sm text-nova-charcoal-700">{t('home.tracking.guest.2.desc')}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <AlertCircle size={24} className="text-purple-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-nova-charcoal">{t('home.tracking.guest.3.title')}</p>
                        <p className="text-sm text-nova-charcoal-700">{t('home.tracking.guest.3.desc')}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <Star size={24} className="text-orange-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-nova-charcoal">{t('home.tracking.guest.4.title')}</p>
                        <p className="text-sm text-nova-charcoal-700">{t('home.tracking.guest.4.desc')}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Navigation size={24} className="text-nova-green flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-nova-charcoal">{t('home.tracking.host.1.title')}</p>
                        <p className="text-sm text-nova-charcoal-700">{t('home.tracking.host.1.desc')}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <Users size={24} className="text-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-nova-charcoal">{t('home.tracking.host.2.title')}</p>
                        <p className="text-sm text-nova-charcoal-700">{t('home.tracking.host.2.desc')}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <DollarSign size={24} className="text-purple-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-nova-charcoal">{t('home.tracking.host.3.title')}</p>
                        <p className="text-sm text-nova-charcoal-700">{t('home.tracking.host.3.desc')}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <Smartphone size={24} className="text-orange-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-nova-charcoal">{t('home.tracking.host.4.title')}</p>
                        <p className="text-sm text-nova-charcoal-700">{t('home.tracking.host.4.desc')}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right - Interactive Map */}
            <div className="relative h-96 md:h-full min-h-[450px] rounded-2xl border-2 border-nova-green/20 overflow-hidden shadow-xl order-1 lg:order-2 bg-white">
              <img
                src="https://maps.googleapis.com/maps/api/staticmap?center=6.594027,3.580021&zoom=12&size=1200x700&maptype=roadmap&markers=color:green%7Clabel:D%7C6.594027,3.580021&markers=color:red%7Clabel:P%7C6.5200,3.3700"
                alt="Live ride tracking map view"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[36%] left-[46%]">
                  <span className="absolute -inset-2 rounded-full bg-nova-green/40 animate-ping"></span>
                  <span className="relative block w-4 h-4 rounded-full bg-nova-green border-2 border-white shadow-lg"></span>
                </div>
                <div className="absolute top-[58%] left-[66%]">
                  <span className="absolute -inset-2 rounded-full bg-red-500/35 animate-ping"></span>
                  <span className="relative block w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-lg"></span>
                </div>
              </div>

              {/* Overlay Info */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-nova-charcoal via-nova-charcoal/70 to-transparent p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                      {userType === 'guest' ? 'Driver Locating...' : 'Monitoring Active Routes'}
                    </p>
                    <p className="text-xs opacity-75">Real-time updates every 3 seconds</p>
                  </div>
                </div>
              </div>

              {/* Live Rider Card */}
              {userType === 'guest' ? (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-nova-charcoal via-nova-charcoal/95 to-transparent p-5 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-lg font-bold">Driver: Samuel O.</p>
                      <p className="text-sm opacity-90 flex items-center gap-1">
                        <span>🚗 Toyota Camry</span>
                      </p>
                      <p className="text-xs opacity-75 mt-1">Arriving in 4 minutes • 1.2 km away</p>
                    </div>
                    <div className="text-right text-xs">
                      <p className="opacity-75">Rating</p>
                      <p className="font-bold text-lg">4.9★</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-nova-charcoal via-nova-charcoal/95 to-transparent p-5 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm opacity-75">Rider Details</p>
                      <p className="text-lg font-bold">Chinedu M.</p>
                      <p className="text-xs opacity-90 mt-1 flex items-center gap-2">
                        <span>📍 Lekki Phase 1</span>
                        <span>→</span>
                        <span>VI</span>
                      </p>
                    </div>
                    <div className="text-right text-xs">
                      <p className="opacity-75">Passenger Rating</p>
                      <p className="font-bold text-lg">4.8★</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ride Comfort & Amenities */}
      <section className="section-padding bg-nova-green-light/20">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="heading-2 font-display text-nova-charcoal mb-4">
              {userType === 'guest' ? t('home.comfort.guest.title') : t('home.comfort.host.title')}
            </h2>
            <p className="subheading text-nova-charcoal-700">
              {userType === 'guest'
                ? t('home.comfort.guest.desc')
                : t('home.comfort.host.desc')
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-stagger">
            {userType === 'guest' ? (
              <>
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 flex justify-center"><Music size={36} className="text-nova-green" /></div>
                  <h4 className="heading-5 font-display text-nova-charcoal mb-2">{t('home.comfort.guest.1.title')}</h4>
                  <p className="text-sm text-nova-charcoal-700">{t('home.comfort.guest.1.desc')}</p>
                </div>

                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 flex justify-center"><Shield size={36} className="text-nova-green" /></div>
                  <h4 className="heading-5 font-display text-nova-charcoal mb-2">{t('home.comfort.guest.2.title')}</h4>
                  <p className="text-sm text-nova-charcoal-700">{t('home.comfort.guest.2.desc')}</p>
                </div>

                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 flex justify-center"><Wind size={36} className="text-nova-green" /></div>
                  <h4 className="heading-5 font-display text-nova-charcoal mb-2">{t('home.comfort.guest.3.title')}</h4>
                  <p className="text-sm text-nova-charcoal-700">{t('home.comfort.guest.3.desc')}</p>
                </div>

                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 flex justify-center"><Users size={36} className="text-nova-green" /></div>
                  <h4 className="heading-5 font-display text-nova-charcoal mb-2">{t('home.comfort.guest.4.title')}</h4>
                  <p className="text-sm text-nova-charcoal-700">{t('home.comfort.guest.4.desc')}</p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 flex justify-center"><Star size={36} className="text-nova-green" /></div>
                  <h4 className="heading-5 font-display text-nova-charcoal mb-2">{t('home.comfort.host.1.title')}</h4>
                  <p className="text-sm text-nova-charcoal-700">{t('home.comfort.host.1.desc')}</p>
                </div>

                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 flex justify-center"><Gift size={36} className="text-nova-green" /></div>
                  <h4 className="heading-5 font-display text-nova-charcoal mb-2">{t('home.comfort.host.2.title')}</h4>
                  <p className="text-sm text-nova-charcoal-700">{t('home.comfort.host.2.desc')}</p>
                </div>

                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 flex justify-center"><Handshake size={36} className="text-nova-green" /></div>
                  <h4 className="heading-5 font-display text-nova-charcoal mb-2">{t('home.comfort.host.3.title')}</h4>
                  <p className="text-sm text-nova-charcoal-700">{t('home.comfort.host.3.desc')}</p>
                </div>

                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 flex justify-center"><Smartphone size={36} className="text-nova-green" /></div>
                  <h4 className="heading-5 font-display text-nova-charcoal mb-2">{t('home.comfort.host.4.title')}</h4>
                  <p className="text-sm text-nova-charcoal-700">{t('home.comfort.host.4.desc')}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="section-padding bg-nova-charcoal">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-2 font-display text-white mb-10">{t('home.download.title')}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: 'Download the FeyRide Guest app',
                  description: 'Scan to download',
                },
                {
                  title: 'Download the FeyRide Host app',
                  description: 'Scan to download',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-6 sm:p-7 border border-nova-charcoal-lighter hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(appInfoPageUrl)}`}
                      alt={`${item.title} QR code`}
                      className="w-28 h-28 sm:w-32 sm:h-32"
                    />

                    <div className="flex-1 min-w-0">
                      <p className="text-2xl font-bold text-nova-charcoal leading-tight">{t(`home.download.${idx}.title`)}</p>
                      <p className="text-xl text-nova-charcoal-700 mt-2">{t(`home.download.${idx}.desc`)}</p>
                    </div>

                    <ArrowRight size={30} className="text-nova-charcoal group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Routes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="heading-2 font-display text-nova-charcoal mb-4">{t('home.routes.title')}</h2>
            <p className="subheading text-nova-charcoal-700">{t('home.routes.desc', { who: userType === 'guest' ? t('home.routes.riders') : t('home.routes.drivers') })}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-stagger">
            {routesData.routes.map((route) => (
              <Card key={route.id} elevated className="card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl"><Users size={24} className="text-nova-green" /></span>
                      <div>
                        <p className="font-semibold text-nova-charcoal">{route.host}</p>
                        <Badge variant="success" className="text-xs">⭐ {route.rating}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex gap-2 items-center">
                    <MapPin size={18} className="text-nova-charcoal-700" />
                    <p className="text-sm text-gray-700">
                      {route.from} → {route.to}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Clock size={18} className="text-nova-charcoal-700" />
                    <p className="text-sm text-gray-700">{route.time}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Users size={18} className="text-nova-charcoal-700" />
                    <p className="text-sm text-nova-charcoal-700">{route.seats} seats available</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-nova-charcoal-lighter">
                  <Button variant="primary" size="sm">
                    {userType === 'guest' ? t('home.routes.bookNow') : t('home.routes.similarRoute')}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-nova-green mb-4">Testimonials</p>
            <h2 className="heading-2 font-display text-nova-charcoal mb-4">Don&apos;t just take our <span className="italic">word</span> for it</h2>
            <p className="subheading text-nova-charcoal-700">
              Hear from guests and hosts who use FeyRide every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialData.testimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.name} elevated className="h-full text-left border border-nova-charcoal-lighter">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{testimonial.avatar}</span>
                  <div>
                    <h4 className="font-display font-bold text-nova-charcoal">{testimonial.name}</h4>
                    <p className="text-xs text-nova-charcoal-700">{testimonial.company}</p>
                  </div>
                </div>

                <p className="text-sm text-nova-charcoal-700 mb-5 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="pt-4 border-t border-nova-charcoal-lighter">
                  <p className="text-sm text-nova-charcoal">
                    <span className="font-semibold text-nova-green">
                      {testimonial.savedAmount ? `Saved ₦${testimonial.savedAmount}` : `Earned ₦${testimonial.earnedAmount}`}
                    </span>
                    {' '}on {testimonial.trips} trips
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/stories">
              <Button variant="primary">{t('home.testimonials.readMore')}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 md:order-1">
              <div className="relative h-96 rounded-2xl border border-nova-green/20 overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <img
                  src={safetyImage}
                  alt="Safety-focused ride experience"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nova-charcoal/70 via-nova-charcoal/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-lg font-semibold">Verified rides, safer journeys</p>
                  <p className="text-sm opacity-90">Every trip monitored, every user verified.</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="heading-2 font-display text-nova-charcoal">{t('home.safety.title')}</h2>
              <p className="subheading text-nova-charcoal-700">
                {t('home.safety.desc')}
              </p>

              <div className="space-y-4">
                {[
                  // { Icon: CheckCircle, title: 'ID + Selfie Verification', desc: 'Every user undergoes rigorous verification' },
                  { Icon: MapPin, title: 'Real-time Trip Tracking', desc: 'Live GPS monitoring on every ride' },
                  { Icon: Shield, title: '24/7 SOS Support', desc: 'Emergency help just one tap away' },
                  { Icon: Star, title: 'Two-way Rating System', desc: 'Build trust through community feedback' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-2xl flex-shrink-0"><item.Icon size={28} className="text-nova-green" /></div>
                    <div>
                      <p className="font-semibold text-nova-charcoal">{t(`home.safety.items.${idx}.title`)}</p>
                      <p className="text-sm text-nova-charcoal-700">{t(`home.safety.items.${idx}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/safety">
                <Button variant="outline">{t('home.safety.learnMore')}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Dynamic based on user type */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="heading-2 font-display text-nova-charcoal">
                {userType === 'guest'
                  ? t('home.finalCta.guest.title')
                  : t('home.finalCta.host.title')
                }
              </h2>
              <p className="subheading text-nova-charcoal-700">
                {userType === 'guest'
                  ? t('home.finalCta.guest.desc')
                  : t('home.finalCta.host.desc')
                }
              </p>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="primary" size="lg" className="group" onClick={handleAppDownload}>
                {userType === 'guest' ? t('home.finalCta.guest.cta') : t('home.finalCta.host.cta')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg">
                  {userType === 'guest' ? t('home.finalCta.guest.learnMore') : t('home.finalCta.host.learnMore')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}



