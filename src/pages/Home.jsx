import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  MapPin,
  CreditCard,
  CheckCircle,
  Search,
  Users,
  DollarSign,
  Shield,
  Star,
  TrendingDown,
  Leaf,
  Clock,
  ArrowRight,
  Zap,
  Heart,
  TrendingUp,
  Navigation,
  Wifi,
  Music,
  Zap as Battery,
  Wind,
  Smartphone,
  AlertCircle,
  Car,
  Gift,
  GiftIcon,
  Handshake,
  CalendarDays,
  Lock,
  Truck,
  Mail,
  XCircle,
} from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import Badge from "../components/Badge";
import AppStoreBadge from "../components/AppStoreBadge";
import GooglePlayBadge from "../components/GooglePlayBadge";
import AnimatedNumber from "../components/AnimatedNumber";
import {
  RevealGroup,
  RevealItem,
  RevealSection,
} from "../components/SectionReveal";
import routesData from "../data/routes.json";
import testimonialData from "../data/testimonials.json";
import howItWorksData from "../data/howItWorks.json";
import guestOnboardingImage from "../assets/pexels-gustavo-fring-4895405.jpg";
import hostOnboardingImage from "../assets/pexels-tim-samuel-5835591.jpg";
import safetyImage from "../assets/pexels-cottonbro-4606336.jpg";
import heroBackgroundImage from "../assets/background-image.png";
import headshot1 from "../assets/istockphoto-1138561236-612x612.jpg";
import headshot2 from "../assets/istockphoto-2187993440-612x612.jpg";
import headshot3 from "../assets/liam-pozz-yjmJBkKn26k-unsplash.jpg";
import headshot4 from "../assets/pexels-cottonbro-4606350.jpg";
import trackingBackground from "../assets/stevepb-map-2789052_1280.jpg";
import {
  appStoreLinks,
  redirectToStoreByDevice,
} from "../utils/appStoreRedirect";

const HOME_USER_TYPE_STORAGE_KEY = "feyride-home-user-type";
const tabPanelMotionProps = {
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: "blur(6px)",
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
};

export default function Home() {
  const [userType, setUserType] = useState(() => {
    if (typeof window === "undefined") {
      return "guest";
    }

    const savedUserType = window.localStorage.getItem(
      HOME_USER_TYPE_STORAGE_KEY,
    );

    return savedUserType === "host" ? "host" : "guest";
  });
  const [tripType, setTripType] = useState("one-way");
  const { t } = useLanguage();
  const { guest: guestSteps, host: hostSteps } = howItWorksData.howItWorks;
  const iconMap = {
    CHECK: CheckCircle,
    SEARCH: Search,
    PAY: CreditCard,
    PIN: Lock,
    MAP: MapPin,
    STAR: Star,
    MAIL: Mail,
    CAR: Truck,
    EARN: CreditCard,
  };
  const testimonialAvatars = {
    "headshot-1": headshot1,
    "headshot-2": headshot2,
    "headshot-3": headshot3,
    "headshot-4": headshot4,
  };
  const appInfoPageUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/coming-soon`
      : "/coming-soon";
  const handleAppDownload = () => {
    redirectToStoreByDevice();
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(HOME_USER_TYPE_STORAGE_KEY, userType);
  }, [userType]);

  // All translation keys must be defined in LanguageContext translations
  const renderHeroTitle = (prefix) => {
    const title1 = t(`${prefix}.title1`);
    const title2 = t(`${prefix}.title2`);
    const title3 = t(`${prefix}.title3`);

    return (
      <span className="hero-title">
        <span className="hero-title-line">{title1}</span>
        {title2 ? (
          <span className="hero-title-line hero-highlight">{title2}</span>
        ) : null}
        {title3 ? <span className="hero-title-line">{title3}</span> : null}
      </span>
    );
  };

  const guestContent = {
    badge: t("home.guest.badge"),
    title: renderHeroTitle("home.guest"),
    //description: t('home.guest.description'),
    cta: t("home.guest.cta"),
    features: [
      {
        icon: Search,
        title: t("home.guest.features.0.title"),
        desc: t("home.guest.features.0.desc"),
      },
      {
        icon: DollarSign,
        title: t("home.guest.features.1.title"),
        desc: t("home.guest.features.1.desc"),
      },
      {
        icon: Shield,
        title: t("home.guest.features.2.title"),
        desc: t("home.guest.features.2.desc"),
      },
      {
        icon: Star,
        title: t("home.guest.features.3.title"),
        desc: t("home.guest.features.3.desc"),
      },
    ],
    stats: [
      { value: 500, suffix: "+", label: t("home.guest.stats.0") },
      { value: 5, prefix: "NGN ", suffix: "M+", label: t("home.guest.stats.1") },
      { value: 4.8, decimals: 1, label: t("home.guest.stats.2") },
    ],
  };

  const hostContent = {
    badge: t("home.host.badge"),
    title: renderHeroTitle("home.host"),
    //description: t('home.host.description'),
    cta: t("home.host.cta"),
    features: [
      {
        icon: TrendingUp,
        title: t("home.host.features.0.title"),
        desc: t("home.host.features.0.desc"),
      },
      {
        icon: Zap,
        title: t("home.host.features.1.title"),
        desc: t("home.host.features.1.desc"),
      },
      {
        icon: Heart,
        title: t("home.host.features.2.title"),
        desc: t("home.host.features.2.desc"),
      },
      {
        icon: CreditCard,
        title: t("home.host.features.3.title"),
        desc: t("home.host.features.3.desc"),
      },
    ],
    stats: [
      { value: 500, suffix: "+", label: t("home.host.stats.0") },
      { value: 5, prefix: "NGN ", suffix: "M+", label: t("home.host.stats.1") },
      { value: 4.8, decimals: 1, label: t("home.host.stats.2") },
    ],
    visual: "Host",
  };

  const currentContent = userType === "guest" ? guestContent : hostContent;
  const quickStartContent =
    userType === "guest"
      ? {
          image: guestOnboardingImage,
          imageAlt: "Guest checking ride options on phone",
          title: "Quick Start as a Guest",
          description: "Set up your account and book your seat in minutes.",
          steps: [
            "Create your account and complete your profile.",
            "Find a nearby ride and reserve your seat.",
          ],
          secondaryAction: { label: "Find Ride", to: "/find-ride" },
        }
      : {
          image: hostOnboardingImage,
          imageAlt: "Rider getting ready to offer rides",
          title: "Quick Start as a Rider",
          description: "Register as a rider and start connecting with riders.",
          steps: [
            "Register and complete setup.",
            "Find active ride demand and start hosting.",
          ],
          secondaryAction: { label: "Post Route", to: "/post-route" },
        };

  return (
    <div className="font-light">
      {/* Hero Section */}
      <section
        className="hero-section py-16 sm:py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Animated Route Line */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{
            pointerEvents: "none",
            zIndex: 5,
          }}
          preserveAspectRatio="none"
          viewBox="0 0 1000 400"
        >
          <defs>
            <style>{`
              @keyframes tracePath {
                0% {
                  stroke-dashoffset: 500;
                  opacity: 0;
                }
                20% {
                  opacity: 1;
                }
                80% {
                  opacity: 1;
                }
                100% {
                  stroke-dashoffset: 0;
                  opacity: 0.3;
                }
              }
              .route-line {
                fill: none;
                stroke: url(#lineGradient);
                stroke-width: 2;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-dasharray: 500;
                animation: tracePath 3s ease-in-out infinite;
              }
            `}</style>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            className="route-line"
            d="M 50,350 Q 250,100 450,320 T 950,200"
          />
        </svg>

        {/* Signature Visual Element - Abstract City Route Silhouette */}
        <svg
          className="absolute top-0 right-0 w-96 h-full"
          style={{
            pointerEvents: "none",
            zIndex: 3,
            opacity: 0.08,
          }}
          viewBox="0 0 300 400"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="cityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* City skyline with route elements */}
          <rect
            x="10"
            y="280"
            width="30"
            height="120"
            fill="url(#cityGradient)"
          />
          <rect
            x="50"
            y="240"
            width="25"
            height="160"
            fill="url(#cityGradient)"
          />
          <polygon points="50,240 65,200 80,240" fill="url(#cityGradient)" />
          <rect
            x="95"
            y="260"
            width="35"
            height="140"
            fill="url(#cityGradient)"
          />
          <rect
            x="145"
            y="220"
            width="28"
            height="180"
            fill="url(#cityGradient)"
          />
          <polygon points="145,220 159,180 173,220" fill="url(#cityGradient)" />
          <rect
            x="190"
            y="250"
            width="32"
            height="150"
            fill="url(#cityGradient)"
          />
          <rect
            x="240"
            y="270"
            width="25"
            height="130"
            fill="url(#cityGradient)"
          />

          {/* Abstract route lines connecting through the cityscape */}
          <path
            d="M 20,320 Q 80,250 150,280 T 280,300"
            fill="none"
            stroke="url(#cityGradient)"
            strokeWidth="2"
            opacity="0.6"
          />
          <circle cx="20" cy="320" r="3" fill="#10B981" opacity="0.7" />
          <circle cx="150" cy="280" r="3" fill="#10B981" opacity="0.7" />
        </svg>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex p-1 rounded-xl bg-white border border-nova-charcoal-lighter shadow-sm mb-8">
              <Button
                variant={userType === "guest" ? "primary" : "ghost"}
                size="sm"
                onClick={() => setUserType("guest")}
                className="rounded-lg"
              >
                Passenger
              </Button>
              <Button
                variant={userType === "host" ? "primary" : "ghost"}
                size="sm"
                onClick={() => setUserType("host")}
                className="rounded-lg"
              >
                Rider
              </Button>
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={userType} {...tabPanelMotionProps}>
                <div className="mb-4">
                  <Badge variant="success">{currentContent.badge}</Badge>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-nova-charcoal leading-tight mb-6">
                  {currentContent.title}
                </h1>
                <p className="subheading text-nova-charcoal-700 max-w-3xl mx-auto mb-8 typewriter-rtl">
                  {currentContent.description}
                </p>

                <div className="flex gap-4 justify-center flex-wrap mb-10">
                  <Button variant="primary" size="lg" onClick={handleAppDownload}>
                    {currentContent.cta}
                    <ArrowRight size={18} />
                  </Button>
                  <Link to="/how-it-works">
                    <Button variant="outline" size="lg">
                      {t("home.finalCta.guest.learnMore")}
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {currentContent.stats.map((stat, index) => (
                    <Card key={`${userType}-${index}`} className="text-center">
                      <p className="text-2xl font-bold text-nova-green">
                        <AnimatedNumber
                          value={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                          decimals={stat.decimals}
                        />
                        {stat.label === t("home.guest.stats.2") ||
                        stat.label === t("home.host.stats.2") ? (
                          <span className="inline-flex items-center ml-2 text-nova-green">
                            <Star
                              size={18}
                              className="fill-nova-green text-nova-green"
                            />
                          </span>
                        ) : null}
                      </p>
                      <p className="text-sm text-nova-charcoal-700">
                        {stat.label}
                      </p>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* How It Works Section (Embedded) */}
      <RevealSection
        as="section"
        className="bg-gradient-to-br from-nova-green-light to-white py-16 sm:py-20"
      >
        <div className="container-custom text-center">
          <RevealItem>
            <h2 className="heading-2 text-nova-charcoal mb-6">
              How <span className="text-nova-green">FeyRide</span> Works
            </h2>
            <p className="subheading text-nova-charcoal-700 max-w-2xl mx-auto">
              Simple, secure, and smart. Whether you're seeking a ride or
              sharing your commute, we've got you covered.
            </p>
          </RevealItem>
        </div>
      </RevealSection>

      <RevealSection
        as="section"
        className="section-padding bg-white relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(${trackingBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container-custom">
          <RevealItem className="mb-16">
            <h3 className="heading-3 text-nova-charcoal mb-4">
              For Passengers
            </h3>
            <p className="subheading text-nova-charcoal-700">
              Book. Pay. Ride. Save.
            </p>
          </RevealItem>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guestSteps.map((item) => {
              const StepIcon = iconMap[item.icon] ?? CheckCircle;
              return (
                <RevealItem key={item.step}>
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-nova-green text-nova-charcoal font-bold text-lg">
                          <StepIcon size={18} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-nova-charcoal mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-nova-charcoal-700">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </RevealSection>

      <RevealSection
        as="section"
        className="section-padding bg-nova-charcoal-light"
      >
        <div className="container-custom">
          <RevealItem className="mb-16">
            <h3 className="heading-3 text-nova-charcoal mb-4">For Riders</h3>
            <p className="subheading text-nova-charcoal-700">
              Share. Earn. Connect.
            </p>
          </RevealItem>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostSteps.map((item) => {
              const StepIcon = iconMap[item.icon] ?? CheckCircle;
              return (
                <RevealItem key={item.step}>
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-nova-green text-nova-charcoal font-bold text-lg">
                          <StepIcon size={18} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-nova-charcoal mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-nova-charcoal-700">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </RevealSection>

      <RevealSection as="section" className="section-padding bg-white">
        <div className="container-custom">
          <RevealItem>
            <h3 className="heading-3 text-center text-nova-charcoal mb-16">
              Why Choose <span className="text-nova-green">FeyRide</span>?
            </h3>
          </RevealItem>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RevealItem>
              <Card elevated>
                <h4 className="heading-4 text-nova-charcoal mb-6">
                  Traditional Ride-Hailing
                </h4>
                <ul className="space-y-3">
                  {[
                    "Expensive (60% commission)",
                    "Professional drivers only",
                    "Community connection",
                    "Lower fares",
                    "Predictable pricing",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="text-nova-charcoal-700 flex items-start gap-2"
                    >
                      <XCircle
                        size={16}
                        className="text-red-500 mt-0.5 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </RevealItem>

            <RevealItem>
              <Card elevated className="bg-nova-charcoal text-white">
                <h4 className="heading-4 text-white mb-6">
                  FeyRide Cost-Sharing
                </h4>
                <ul className="space-y-3">
                  {[
                    "Affordable (10-20% commission)",
                    "Regular commuters like you",
                    "Build lasting community",
                    "Lower fares and lower cost",
                    "Fixed, transparent pricing",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="text-nova-green font-semibold flex items-start gap-2"
                    >
                      <CheckCircle
                        size={16}
                        className="text-nova-green mt-0.5 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </RevealItem>
          </RevealGroup>
        </div>
      </RevealSection>

      <RevealSection
        as="section"
        className="section-padding bg-gradient-to-r from-nova-green-dark to-nova-green-darker text-white text-center"
      >
        <div className="container-custom">
          <RevealItem>
            <h3 className="heading-3 text-white mb-6">Get Started Today</h3>
            <p className="subheading text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of smart commuters saving time and money.
            </p>
          </RevealItem>
          <RevealGroup className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <RevealItem>
              <a
                href={appStoreLinks.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity w-full sm:w-auto"
              >
                <AppStoreBadge className="h-14 w-full" />
              </a>
            </RevealItem>
            <RevealItem>
              <a
                href={appStoreLinks.android}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity w-full sm:w-auto"
              >
                <GooglePlayBadge className="h-14 w-full" />
              </a>
            </RevealItem>
          </RevealGroup>
        </div>
      </RevealSection>

      {/* Quick Start Section */}
      <RevealSection as="section" className="section-padding bg-white">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={`quick-start-${userType}`}
              {...tabPanelMotionProps}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <RevealItem className="relative">
                <img
                  src={quickStartContent.image}
                  alt={quickStartContent.imageAlt}
                  className="w-full h-[420px] object-cover rounded-2xl border border-nova-green/20 shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-nova-charcoal/30 via-transparent to-transparent"></div>
              </RevealItem>

              <RevealGroup className="space-y-6">
                <RevealItem>
                  <h2 className="heading-2 font-display text-nova-charcoal mb-3">
                    Start in <span className="italic">2 Steps</span>
                  </h2>
                  <p className="subheading text-nova-charcoal-700">
                    Choose your path and get moving quickly to book a seat.
                  </p>
                </RevealItem>

                <RevealItem>
                  <Card className="border border-nova-green/20">
                    <h3 className="heading-5 font-display text-nova-charcoal mb-2">
                      {quickStartContent.title}
                    </h3>
                    <p className="text-sm text-nova-charcoal-700 mb-4">
                      {quickStartContent.description}
                    </p>
                    <ul className="space-y-2 mb-5 text-sm text-nova-charcoal-700">
                      {quickStartContent.steps.map((step) => (
                        <li key={step} className="flex items-start gap-2">
                          <CheckCircle
                            size={18}
                            className="text-nova-green mt-0.5 flex-shrink-0"
                          />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleAppDownload}
                      >
                        Register
                      </Button>
                      {quickStartContent.secondaryAction.to === "/find-ride" ? (
                        <Button variant="outline" size="sm">
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
                </RevealItem>
              </RevealGroup>
            </motion.div>
          </AnimatePresence>
        </div>
      </RevealSection>

      {/* Live Ride Tracking Section */}
      <RevealSection as="section" className="section-padding bg-white">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={`tracking-${userType}`}
              {...tabPanelMotionProps}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Content */}
              <RevealGroup className="space-y-6 order-2 lg:order-1">
                <RevealItem>
                  <h2 className="heading-2 font-display text-nova-charcoal mb-4">
                    {t("home.tracking.title")}
                  </h2>
                  <p className="subheading text-nova-charcoal-700 mb-8">
                    {userType === "guest"
                      ? t("home.tracking.guest.desc")
                      : t("home.tracking.host.desc")}
                  </p>
                </RevealItem>

                <RevealGroup className="space-y-4">
                  {userType === "guest" ? (
                    <>
                      <RevealItem className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <Navigation
                          size={24}
                          className="text-nova-green flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-nova-charcoal">
                            {t("home.tracking.guest.1.title")}
                          </p>
                          <p className="text-sm text-nova-charcoal-700">
                            {t("home.tracking.guest.1.desc")}
                          </p>
                        </div>
                      </RevealItem>

                      <RevealItem className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                        <Users
                          size={24}
                          className="text-green-600 flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-nova-charcoal">
                            {t("home.tracking.guest.2.title")}
                          </p>
                          <p className="text-sm text-nova-charcoal-700">
                            {t("home.tracking.guest.2.desc")}
                          </p>
                        </div>
                      </RevealItem>

                      <RevealItem className="flex gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <AlertCircle
                          size={24}
                          className="text-purple-600 flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-nova-charcoal">
                            {t("home.tracking.guest.3.title")}
                          </p>
                          <p className="text-sm text-nova-charcoal-700">
                            {t("home.tracking.guest.3.desc")}
                          </p>
                        </div>
                      </RevealItem>

                      <RevealItem className="flex gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <Star
                          size={24}
                          className="text-orange-600 flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-nova-charcoal">
                            {t("home.tracking.guest.4.title")}
                          </p>
                          <p className="text-sm text-nova-charcoal-700">
                            {t("home.tracking.guest.4.desc")}
                          </p>
                        </div>
                      </RevealItem>
                    </>
                  ) : (
                    <>
                      <RevealItem className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <Navigation
                          size={24}
                          className="text-nova-green flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-nova-charcoal">
                            {t("home.tracking.host.1.title")}
                          </p>
                          <p className="text-sm text-nova-charcoal-700">
                            {t("home.tracking.host.1.desc")}
                          </p>
                        </div>
                      </RevealItem>

                      <RevealItem className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                        <Users
                          size={24}
                          className="text-green-600 flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-nova-charcoal">
                            {t("home.tracking.host.2.title")}
                          </p>
                          <p className="text-sm text-nova-charcoal-700">
                            {t("home.tracking.host.2.desc")}
                          </p>
                        </div>
                      </RevealItem>

                      <RevealItem className="flex gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <DollarSign
                          size={24}
                          className="text-purple-600 flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-nova-charcoal">
                            {t("home.tracking.host.3.title")}
                          </p>
                          <p className="text-sm text-nova-charcoal-700">
                            {t("home.tracking.host.3.desc")}
                          </p>
                        </div>
                      </RevealItem>

                      <RevealItem className="flex gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <Smartphone
                          size={24}
                          className="text-orange-600 flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-nova-charcoal">
                            {t("home.tracking.host.4.title")}
                          </p>
                          <p className="text-sm text-nova-charcoal-700">
                            {t("home.tracking.host.4.desc")}
                          </p>
                        </div>
                      </RevealItem>
                    </>
                  )}
                </RevealGroup>
              </RevealGroup>

              {/* Right Image */}
              <RevealItem className="order-1 lg:order-2">
                <div className="relative h-72 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden border border-nova-green/20 shadow-lg">
                  <img
                    src={trackingBackground}
                    alt="Map background"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-nova-charcoal/30 via-transparent to-transparent"></div>
                </div>
              </RevealItem>
            </motion.div>
          </AnimatePresence>
        </div>
      </RevealSection>

      {/* Ride Comfort & Amenities */}
      <RevealSection
        as="section"
        className="section-padding bg-nova-green-light/20"
      >
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div key={`comfort-${userType}`} {...tabPanelMotionProps}>
              <RevealItem className="text-center mb-16">
                <h2 className="heading-2 font-display text-nova-charcoal mb-4">
                  {userType === "guest"
                    ? t("home.comfort.guest.title")
                    : t("home.comfort.host.title")}
                </h2>
                <p className="subheading text-nova-charcoal-700">
                  {userType === "guest"
                    ? t("home.comfort.guest.desc")
                    : t("home.comfort.host.desc")}
                </p>
              </RevealItem>

              <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {userType === "guest" ? (
                  <>
                <RevealItem className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 flex justify-center">
                    <Music size={36} className="text-nova-green" />
                  </div>
                  <h4 className="heading-5 font-display text-nova-charcoal mb-2">
                    {t("home.comfort.guest.1.title")}
                  </h4>
                  <p className="text-sm text-nova-charcoal-700">
                    {t("home.comfort.guest.1.desc")}
                  </p>
                </RevealItem>

                <RevealItem className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 flex justify-center">
                    <Shield size={36} className="text-nova-green" />
                  </div>
                  <h4 className="heading-5 font-display text-nova-charcoal mb-2">
                    {t("home.comfort.guest.2.title")}
                  </h4>
                  <p className="text-sm text-nova-charcoal-700">
                    {t("home.comfort.guest.2.desc")}
                  </p>
                </RevealItem>

                <RevealItem className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 flex justify-center">
                    <Wind size={36} className="text-nova-green" />
                  </div>
                  <h4 className="heading-5 font-display text-nova-charcoal mb-2">
                    {t("home.comfort.guest.3.title")}
                  </h4>
                  <p className="text-sm text-nova-charcoal-700">
                    {t("home.comfort.guest.3.desc")}
                  </p>
                </RevealItem>

                <RevealItem className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 flex justify-center">
                    <Users size={36} className="text-nova-green" />
                  </div>
                  <h4 className="heading-5 font-display text-nova-charcoal mb-2">
                    {t("home.comfort.guest.4.title")}
                  </h4>
                  <p className="text-sm text-nova-charcoal-700">
                    {t("home.comfort.guest.4.desc")}
                  </p>
                </RevealItem>
              </>
            ) : (
              <>
                <RevealItem className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 flex justify-center">
                    <Star size={36} className="text-nova-green" />
                  </div>
                  <h4 className="heading-5 font-display text-nova-charcoal mb-2">
                    {t("home.comfort.host.1.title")}
                  </h4>
                  <p className="text-sm text-nova-charcoal-700">
                    {t("home.comfort.host.1.desc")}
                  </p>
                </RevealItem>

                <RevealItem className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 flex justify-center">
                    <Gift size={36} className="text-nova-green" />
                  </div>
                  <h4 className="heading-5 font-display text-nova-charcoal mb-2">
                    {t("home.comfort.host.2.title")}
                  </h4>
                  <p className="text-sm text-nova-charcoal-700">
                    {t("home.comfort.host.2.desc")}
                  </p>
                </RevealItem>

                <RevealItem className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 flex justify-center">
                    <Handshake size={36} className="text-nova-green" />
                  </div>
                  <h4 className="heading-5 font-display text-nova-charcoal mb-2">
                    {t("home.comfort.host.3.title")}
                  </h4>
                  <p className="text-sm text-nova-charcoal-700">
                    {t("home.comfort.host.3.desc")}
                  </p>
                </RevealItem>

                <RevealItem className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3 flex justify-center">
                    <Smartphone size={36} className="text-nova-green" />
                  </div>
                  <h4 className="heading-5 font-display text-nova-charcoal mb-2">
                    {t("home.comfort.host.4.title")}
                  </h4>
                  <p className="text-sm text-nova-charcoal-700">
                    {t("home.comfort.host.4.desc")}
                  </p>
                </RevealItem>
                  </>
                )}
              </RevealGroup>
            </motion.div>
          </AnimatePresence>
        </div>
      </RevealSection>

      {/* App Download Section */}
      <RevealSection as="section" className="section-padding bg-nova-charcoal">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <RevealItem>
              <h2 className="heading-2 font-display text-white mb-10">
                {t("home.download.title")}
              </h2>
            </RevealItem>

            <RevealGroup className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Download the FeyRide Passenger app",
                  description: "Scan to download",
                },
                {
                  title: "Download the FeyRide Driver app",
                  description: "Scan to download",
                },
              ].map((item, idx) => (
                <RevealItem key={idx}>
                  <div className="group bg-white p-6 sm:p-7 border border-nova-charcoal-lighter hover:shadow-lg transition-all">
                    <div className="flex items-center gap-5">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(appInfoPageUrl)}`}
                        alt={`${item.title} QR code`}
                        className="w-28 h-28 sm:w-32 sm:h-32"
                        loading="lazy"
                      />

                      <div className="flex-1 min-w-0">
                        <p className="text-2xl font-bold text-nova-charcoal leading-tight">
                          {t(`home.download.${idx}.title`)}
                        </p>
                        <p className="text-xl text-nova-charcoal-700 mt-2">
                          {t(`home.download.${idx}.desc`)}
                        </p>
                      </div>

                      <ArrowRight
                        size={30}
                        className="text-nova-charcoal group-hover:translate-x-1 transition-transform flex-shrink-0"
                      />
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </RevealSection>

      {/* Featured Routes */}
      <RevealSection as="section" className="section-padding bg-white">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div key={`routes-${userType}`} {...tabPanelMotionProps}>
              <RevealItem className="text-center mb-16">
                <h2 className="heading-2 font-display text-nova-charcoal mb-4">
                  {t("home.routes.title")}
                </h2>
                <p className="subheading text-nova-charcoal-700">
                  {t("home.routes.desc", {
                    who:
                      userType === "guest"
                        ? t("home.routes.riders")
                        : t("home.routes.drivers"),
                  })}
                </p>
              </RevealItem>

              <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {routesData.routes.map((route) => (
                  <RevealItem key={`${userType}-${route.id}`}>
                    <Card elevated className="card-hover">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">
                              <Users size={24} className="text-nova-green" />
                            </span>
                            <div>
                              <p className="font-semibold text-nova-charcoal">
                                {route.host}
                              </p>
                              <Badge
                                variant="success"
                                className="text-xs inline-flex items-center gap-1"
                              >
                                <span className="sr-only">
                                  Rating: {route.rating}
                                </span>
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={12}
                                    className={
                                      i < Math.round(route.rating)
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-yellow-400/40"
                                    }
                                  />
                                ))}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3 mb-4">
                        <div className="flex gap-2 items-center">
                          <MapPin size={18} className="text-nova-charcoal-700" />
                          <p className="text-sm text-gray-700">
                            {route.from} to {route.to}
                          </p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Clock size={18} className="text-nova-charcoal-700" />
                          <p className="text-sm text-gray-700">{route.time}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Users size={18} className="text-nova-charcoal-700" />
                          <p className="text-sm text-nova-charcoal-700">
                            {route.seats} seats available
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-nova-charcoal-lighter">
                        <Button variant="primary" size="sm">
                          {userType === "guest"
                            ? t("home.routes.bookNow")
                            : t("home.routes.similarRoute")}
                        </Button>
                      </div>
                    </Card>
                  </RevealItem>
                ))}
              </RevealGroup>
            </motion.div>
          </AnimatePresence>
        </div>
      </RevealSection>

      {/* Testimonials */}
      <RevealSection as="section" className="section-padding bg-white">
        <div className="container-custom">
          <RevealItem className="max-w-5xl mx-auto text-center mb-12">
            <p className="text-xl font-semibold uppercase tracking-[0.2em] text-nova-green mb-4">
              Testimonials
            </p>
            <h2 className="heading-2 font-display text-nova-charcoal mb-4">
              Don&apos;t just take our <span className="italic">word</span> for
              it
            </h2>
            <p className="subheading text-nova-charcoal-700">
              Hear from passengers and riders who use FeyRide every day.
            </p>
          </RevealItem>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialData.testimonials.slice(0, 3).map((testimonial) => (
              <RevealItem key={testimonial.name}>
                <Card
                  elevated
                  className="h-full text-left border border-nova-charcoal-lighter"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonialAvatars[testimonial.avatar]}
                      alt={`${testimonial.name} headshot`}
                      className="w-12 h-12 rounded-full object-cover border border-nova-charcoal-lighter"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-display font-bold text-nova-charcoal">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-nova-charcoal-700">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-nova-charcoal-700 mb-5 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <div className="pt-4 border-t border-nova-charcoal-lighter">
                    <p className="text-sm text-nova-charcoal">
                      <span className="font-semibold text-nova-green">
                        {testimonial.savedAmount
                          ? `Saved NGN ${testimonial.savedAmount}`
                          : `Earned NGN ${testimonial.earnedAmount}`}
                      </span>{" "}
                      on {testimonial.trips} trips
                    </p>
                  </div>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>

          <RevealItem className="text-center mt-10">
            <Link to="/stories">
              <Button variant="primary">
                {t("home.testimonials.readMore")}
              </Button>
            </Link>
          </RevealItem>
        </div>
      </RevealSection>

      {/* Safety Section */}
      <RevealSection as="section" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <RevealItem className="order-2 md:order-1">
              <div className="relative h-96 rounded-2xl border border-nova-green/20 overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <img
                  src={safetyImage}
                  alt="Safety-focused ride experience"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nova-charcoal/70 via-nova-charcoal/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-lg font-semibold">
                    Verified rides, safer journeys
                  </p>
                  <p className="text-sm opacity-90">
                    Every trip monitored, every user verified.
                  </p>
                </div>
              </div>
            </RevealItem>

            {/* Right Content */}
            <RevealGroup className="order-1 md:order-2 space-y-6">
              <RevealItem>
                <h2 className="heading-2 font-display text-nova-charcoal">
                  {t("home.safety.title")}
                </h2>
                <p className="subheading text-nova-charcoal-700">
                  {t("home.safety.desc")}
                </p>
              </RevealItem>

              <RevealGroup className="space-y-4">
                {[
                  // { Icon: CheckCircle, title: 'ID + Selfie Verification', desc: 'Every user undergoes rigorous verification' },
                  {
                    Icon: MapPin,
                    title: "Real-time Trip Tracking",
                    desc: "Live GPS monitoring on every ride",
                  },
                  {
                    Icon: Shield,
                    title: "24/7 SOS Support",
                    desc: "Emergency help just one tap away",
                  },
                  {
                    Icon: Star,
                    title: "Two-way Rating System",
                    desc: "Build trust through community feedback",
                  },
                ].map((item, idx) => (
                  <RevealItem key={idx} className="flex gap-4">
                    <div className="text-2xl flex-shrink-0">
                      <item.Icon size={28} className="text-nova-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-nova-charcoal">
                        {t(`home.safety.items.${idx}.title`)}
                      </p>
                      <p className="text-sm text-nova-charcoal-700">
                        {t(`home.safety.items.${idx}.desc`)}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>

              <RevealItem>
                <Link to="/safety">
                  <Button variant="outline">
                    {t("home.safety.learnMore")}
                  </Button>
                </Link>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </RevealSection>

      {/* Final CTA - Dynamic based on user type */}
      <RevealSection as="section" className="section-padding bg-white">
        <div className="container-custom text-center">
          <AnimatePresence mode="wait">
            <motion.div key={`final-cta-${userType}`} {...tabPanelMotionProps}>
              <RevealGroup className="max-w-3xl mx-auto space-y-8">
                <RevealItem className="space-y-4">
                  <h2 className="heading-2 font-display text-nova-charcoal">
                    {userType === "guest"
                      ? t("home.finalCta.guest.title")
                      : t("home.finalCta.host.title")}
                  </h2>
                  <p className="subheading text-nova-charcoal-700">
                    {userType === "guest"
                      ? t("home.finalCta.guest.desc")
                      : t("home.finalCta.host.desc")}
                  </p>
                </RevealItem>

                <RevealGroup className="flex gap-4 justify-center flex-wrap">
                  <RevealItem>
                    <Button
                      variant="primary"
                      size="lg"
                      className="group"
                      onClick={handleAppDownload}
                    >
                      {userType === "guest"
                        ? t("home.finalCta.guest.cta")
                        : t("home.finalCta.host.cta")}
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Button>
                  </RevealItem>
                  <RevealItem>
                    <Link to="/how-it-works">
                      <Button variant="outline" size="lg">
                        {userType === "guest"
                          ? t("home.finalCta.guest.learnMore")
                          : t("home.finalCta.host.learnMore")}
                      </Button>
                    </Link>
                  </RevealItem>
                </RevealGroup>
              </RevealGroup>
            </motion.div>
          </AnimatePresence>
        </div>
      </RevealSection>
    </div>
  );
}
