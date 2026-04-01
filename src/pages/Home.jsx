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
import TestimonialMarquee from "../components/TestimonialMarquee";
import {
  RevealGroup,
  RevealItem,
  RevealSection,
} from "../components/SectionReveal";
import routesData from "../data/routes.json";
import { lagosLocations } from "../data/lagosLocations";
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
const MotionDiv = motion.div;

export default function Home() {
  const todayDate = new Date().toISOString().split("T")[0];
  const [userType, setUserType] = useState(() => {
    if (typeof window === "undefined") {
      return "guest";
    }

    const savedUserType = window.localStorage.getItem(
      HOME_USER_TYPE_STORAGE_KEY,
    );

    return savedUserType === "host" ? "host" : "guest";
  });
  const [tripType, setTripType] = useState("pickup-now");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [scheduledDate, setScheduledDate] = useState(todayDate);
  const [scheduledTime, setScheduledTime] = useState("08:30");
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
  const [showDropoffSuggestions, setShowDropoffSuggestions] = useState(false);
  const [pickupLocationError, setPickupLocationError] = useState("");
  const [isLocatingPickup, setIsLocatingPickup] = useState(false);
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

  const getMatchingLocations = (query) => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return lagosLocations.slice(0, 6);
    }

    return lagosLocations
      .filter((location) =>
        `${location.name} ${location.address}`
          .toLowerCase()
          .includes(normalizedQuery),
      )
      .slice(0, 6);
  };

  const pickupSuggestions = getMatchingLocations(pickupLocation);
  const dropoffSuggestions = getMatchingLocations(dropoffLocation);

  const getDistanceInKm = (lat1, lng1, lat2, lng2) => {
    const toRadians = (value) => (value * Math.PI) / 180;
    const earthRadiusKm = 6371;
    const deltaLat = toRadians(lat2 - lat1);
    const deltaLng = toRadians(lng2 - lng1);
    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(deltaLng / 2) *
        Math.sin(deltaLng / 2);

    return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  const resolveNearestLagosLocation = (latitude, longitude) => {
    const matches = lagosLocations
      .map((location) => ({
        ...location,
        distanceKm: getDistanceInKm(
          latitude,
          longitude,
          location.lat,
          location.lng,
        ),
      }))
      .sort((first, second) => first.distanceKm - second.distanceKm);

    return matches[0];
  };

  const handleUseCurrentPickupLocation = () => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setPickupLocationError("Location access is not supported on this device.");
      return;
    }

    setIsLocatingPickup(true);
    setPickupLocationError("");

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const nearestLocation = resolveNearestLagosLocation(
          coords.latitude,
          coords.longitude,
        );

        if (!nearestLocation || nearestLocation.distanceKm > 35) {
          setPickupLocationError(
            "We could not match your current position to a pickup point in Lagos.",
          );
          setIsLocatingPickup(false);
          return;
        }

        setPickupLocation(
          `Current location near ${nearestLocation.address}`,
        );
        setShowPickupSuggestions(false);
        setIsLocatingPickup(false);
      },
      (error) => {
        const message =
          error.code === error.PERMISSION_DENIED
            ? "Location permission was denied."
            : "We could not get your current location right now.";

        setPickupLocationError(message);
        setIsLocatingPickup(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 120000 },
    );
  };

  const selectPickupLocation = (address) => {
    setPickupLocation(address);
    setShowPickupSuggestions(false);
    setPickupLocationError("");
  };

  const selectDropoffLocation = (address) => {
    setDropoffLocation(address);
    setShowDropoffSuggestions(false);
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
    // description: "Set your clear route, book faster and attract drivers",
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
    // description: "Set a clear route and attract the right passengers",
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
  const heroPlannerContent =
    userType === "guest"
      ? {
          cta: "See available rides",
          helper: "Live ride matching",
          pickupPlaceholder: "Enter pickup location",
          dropoffPlaceholder: "Enter destination",
        }
      : {
          cta: "Plan your route",
          helper: "Clear route setup",
          pickupPlaceholder: "Enter pickup point",
          dropoffPlaceholder: "Enter destination point",
        };
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
        className="hero-section py-16 sm:py-20 relative overflow-visible"
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
              <MotionDiv key={userType} {...tabPanelMotionProps}>
                <div className="mb-4">
                  <Badge variant="success">{currentContent.badge}</Badge>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-nova-charcoal leading-tight mb-6">
                  {currentContent.title}
                </h1>
                <p className="subheading text-nova-charcoal-700 max-w-3xl mx-auto mb-8 typewriter-rtl">
                  {currentContent.description}
                </p>

                <div className="relative z-30 mx-auto mb-10 max-w-5xl rounded-[30px] border border-white/85 bg-white/92 p-4 text-left shadow-[0_30px_90px_-45px_rgba(17,24,39,0.55)] backdrop-blur-xl sm:p-5 lg:p-6">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex rounded-full bg-nova-charcoal/5 p-1 ring-1 ring-nova-charcoal-lighter">
                      {[
                        {
                          id: "pickup-now",
                          label: "Pickup now",
                          icon: Clock,
                        },
                        {
                          id: "schedule",
                          label: "Schedule",
                          icon: CalendarDays,
                        },
                      ].map((option) => {
                        const OptionIcon = option.icon;

                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => setTripType(option.id)}
                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ${
                              tripType === option.id
                                ? "bg-nova-charcoal text-white shadow-sm"
                                : "text-nova-charcoal-700"
                            }`}
                          >
                            <OptionIcon size={16} />
                            {option.label}
                          </button>
                        );
                      })}
                    </div>

                    <span className="inline-flex items-center gap-2 rounded-full border border-nova-green/15 bg-nova-green/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-nova-charcoal">
                      <Car size={14} className="text-nova-green-dark" />
                      {heroPlannerContent.helper}
                    </span>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                    <div className="rounded-[24px] bg-[#f8fbfa] p-3 sm:p-4">
                      <div
                        className={`grid gap-3 ${
                          tripType === "schedule"
                            ? "md:grid-cols-[42px_1fr]"
                            : "md:grid-cols-[42px_1fr]"
                        }`}
                      >
                        <div className="hidden items-center justify-center md:flex">
                          <div className="flex h-full flex-col items-center py-2">
                            <span className="h-3.5 w-3.5 rounded-full border-[3px] border-nova-charcoal bg-white" />
                            <span className="my-2 h-full w-px flex-1 bg-nova-charcoal/20" />
                            <span className="h-3.5 w-3.5 rounded-full bg-nova-green" />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="group relative flex items-center gap-3 rounded-[20px] border border-nova-charcoal-lighter bg-white px-4 py-4 transition-all duration-300 focus-within:z-30 focus-within:border-nova-green focus-within:shadow-[0_18px_40px_-30px_rgba(16,185,129,0.9)] hover:border-nova-green/45">
                            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-nova-charcoal/5 text-nova-charcoal md:hidden">
                              <MapPin size={18} />
                            </span>
                            <span className="relative block flex-1">
                              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-nova-charcoal-700">
                                Pickup location
                              </span>
                              <input
                                type="text"
                                value={pickupLocation}
                                onChange={(event) => {
                                  setPickupLocation(event.target.value);
                                  setShowPickupSuggestions(true);
                                  setPickupLocationError("");
                                }}
                                onFocus={() => setShowPickupSuggestions(true)}
                                onBlur={() => {
                                  window.setTimeout(() => {
                                    setShowPickupSuggestions(false);
                                  }, 120);
                                }}
                                placeholder={heroPlannerContent.pickupPlaceholder}
                                className="w-full border-none bg-transparent p-0 text-base font-semibold text-nova-charcoal outline-none placeholder:font-medium placeholder:text-nova-charcoal-500"
                              />
                              {showPickupSuggestions ? (
                                <div className="absolute left-0 right-0 top-[calc(100%+0.9rem)] z-40 overflow-hidden rounded-[22px] border border-nova-charcoal-lighter bg-white shadow-[0_24px_70px_-28px_rgba(17,24,39,0.32)] ring-1 ring-black/5">
                                  <button
                                    type="button"
                                    onMouseDown={(event) => event.preventDefault()}
                                    onClick={handleUseCurrentPickupLocation}
                                    className="flex w-full items-center justify-between gap-3 border-b border-nova-charcoal-lighter bg-nova-green/[0.05] px-4 py-3 text-left transition-colors hover:bg-nova-green/10"
                                  >
                                    <span className="flex items-center gap-3">
                                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-nova-green/12 text-nova-green-dark">
                                        <MapPin size={16} />
                                      </span>
                                      <span>
                                        <span className="block text-sm font-semibold text-nova-charcoal">
                                          Use current location
                                        </span>
                                        <span className="block text-xs text-nova-charcoal-700">
                                          Lagos only
                                        </span>
                                      </span>
                                    </span>
                                    <span className="text-xs font-semibold text-nova-green-dark">
                                      {isLocatingPickup ? "Locating..." : "Use"}
                                    </span>
                                  </button>

                                  {pickupSuggestions.length > 0 ? (
                                    <div className="max-h-72 overflow-y-auto py-1">
                                      {pickupSuggestions.map((location) => (
                                      <button
                                        key={location.address}
                                        type="button"
                                        onMouseDown={(event) =>
                                          event.preventDefault()
                                        }
                                        onClick={() =>
                                          selectPickupLocation(location.address)
                                        }
                                        className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-nova-charcoal/5"
                                      >
                                        <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl bg-nova-charcoal/5 text-nova-charcoal">
                                          <MapPin size={15} />
                                        </span>
                                        <span>
                                          <span className="block text-sm font-semibold text-nova-charcoal">
                                            {location.name}
                                          </span>
                                          <span className="block text-xs text-nova-charcoal-700">
                                            {location.address}
                                          </span>
                                        </span>
                                      </button>
                                      ))}
                                    </div>
                                  ) : (
                                    <div className="px-4 py-3 text-sm text-nova-charcoal-700">
                                      No Lagos pickup suggestions found.
                                    </div>
                                  )}
                                </div>
                              ) : null}
                            </span>
                          </label>
                          {pickupLocationError ? (
                            <p className="px-2 text-sm text-red-600">
                              {pickupLocationError}
                            </p>
                          ) : null}

                          <label className="group relative flex items-center gap-3 rounded-[20px] border border-nova-charcoal-lighter bg-white px-4 py-4 transition-all duration-300 focus-within:z-20 focus-within:border-nova-green focus-within:shadow-[0_18px_40px_-30px_rgba(16,185,129,0.9)] hover:border-nova-green/45">
                            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-nova-green/12 text-nova-green-dark md:hidden">
                              <Navigation size={18} />
                            </span>
                            <span className="relative block flex-1">
                              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-nova-charcoal-700">
                                Dropoff location
                              </span>
                              <input
                                type="text"
                                value={dropoffLocation}
                                onChange={(event) => {
                                  setDropoffLocation(event.target.value);
                                  setShowDropoffSuggestions(true);
                                }}
                                onFocus={() => setShowDropoffSuggestions(true)}
                                onBlur={() => {
                                  window.setTimeout(() => {
                                    setShowDropoffSuggestions(false);
                                  }, 120);
                                }}
                                placeholder={heroPlannerContent.dropoffPlaceholder}
                                className="w-full border-none bg-transparent p-0 text-base font-semibold text-nova-charcoal outline-none placeholder:font-medium placeholder:text-nova-charcoal-500"
                              />
                              {showDropoffSuggestions ? (
                                <div className="absolute left-0 right-0 top-[calc(100%+0.9rem)] z-30 overflow-hidden rounded-[22px] border border-nova-charcoal-lighter bg-white shadow-[0_24px_70px_-28px_rgba(17,24,39,0.32)] ring-1 ring-black/5">
                                  {dropoffSuggestions.length > 0 ? (
                                    <div className="max-h-72 overflow-y-auto py-1">
                                      {dropoffSuggestions.map((location) => (
                                      <button
                                        key={location.address}
                                        type="button"
                                        onMouseDown={(event) =>
                                          event.preventDefault()
                                        }
                                        onClick={() =>
                                          selectDropoffLocation(location.address)
                                        }
                                        className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-nova-charcoal/5"
                                      >
                                        <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl bg-nova-green/12 text-nova-green-dark">
                                          <Navigation size={15} />
                                        </span>
                                        <span>
                                          <span className="block text-sm font-semibold text-nova-charcoal">
                                            {location.name}
                                          </span>
                                          <span className="block text-xs text-nova-charcoal-700">
                                            {location.address}
                                          </span>
                                        </span>
                                      </button>
                                      ))}
                                    </div>
                                  ) : (
                                    <div className="px-4 py-3 text-sm text-nova-charcoal-700">
                                      No Lagos destination suggestions found.
                                    </div>
                                  )}
                                </div>
                              ) : null}
                            </span>
                          </label>

                          {tripType === "schedule" ? (
                            <div className="grid gap-3 sm:grid-cols-2">
                              <label className="group flex items-center gap-3 rounded-[20px] border border-nova-charcoal-lighter bg-white px-4 py-4 transition-all duration-300 focus-within:border-nova-green focus-within:shadow-[0_18px_40px_-30px_rgba(16,185,129,0.9)] hover:border-nova-green/45">
                                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-nova-charcoal/5 text-nova-charcoal">
                                  <CalendarDays size={18} />
                                </span>
                                <span className="flex-1">
                                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-nova-charcoal-700">
                                    Date
                                  </span>
                                  <input
                                    type="date"
                                    min={todayDate}
                                    value={scheduledDate}
                                    onChange={(event) =>
                                      setScheduledDate(event.target.value)
                                    }
                                    className="w-full border-none bg-transparent p-0 text-base font-semibold text-nova-charcoal outline-none"
                                  />
                                </span>
                              </label>

                              <label className="group flex items-center gap-3 rounded-[20px] border border-nova-charcoal-lighter bg-white px-4 py-4 transition-all duration-300 focus-within:border-nova-green focus-within:shadow-[0_18px_40px_-30px_rgba(16,185,129,0.9)] hover:border-nova-green/45">
                                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-nova-green/12 text-nova-green-dark">
                                  <Clock size={18} />
                                </span>
                                <span className="flex-1">
                                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-nova-charcoal-700">
                                    Time
                                  </span>
                                  <input
                                    type="time"
                                    value={scheduledTime}
                                    onChange={(event) =>
                                      setScheduledTime(event.target.value)
                                    }
                                    className="w-full border-none bg-transparent p-0 text-base font-semibold text-nova-charcoal outline-none"
                                  />
                                </span>
                              </label>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      size="lg"
                      onClick={handleAppDownload}
                      className="min-h-[72px] rounded-[22px] px-8 text-base shadow-[0_24px_45px_-24px_rgba(16,185,129,0.95)] lg:min-w-[220px]"
                    >
                      {heroPlannerContent.cta}
                      <ArrowRight size={18} />
                    </Button>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3 text-sm">
                    <Link
                      to="/how-it-works"
                      className="font-semibold text-nova-charcoal underline decoration-nova-green/40 underline-offset-4 transition-colors hover:text-nova-green-dark"
                    >
                    </Link>
                    <button
                      type="button"
                      onClick={handleAppDownload}
                      className="font-semibold text-nova-green-dark transition-colors hover:text-nova-charcoal"
                    >
                      {currentContent.cta}
                    </button>
                  </div>
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {currentContent.stats.map((stat, index) => (
                    <Card
                      key={`${userType}-${index}`}
                      className="flex h-full flex-col justify-center text-center"
                    >
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
              </MotionDiv>
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
            <MotionDiv
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
            </MotionDiv>
          </AnimatePresence>
        </div>
      </RevealSection>

      {/* Live Ride Tracking Section */}
      <RevealSection as="section" className="section-padding bg-white">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <MotionDiv
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
            </MotionDiv>
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
            <MotionDiv key={`comfort-${userType}`} {...tabPanelMotionProps}>
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
            </MotionDiv>
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
            <MotionDiv key={`routes-${userType}`} {...tabPanelMotionProps}>
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
                  <RevealItem key={`${userType}-${route.id}`} className="h-full">
                    <Card elevated className="card-hover flex h-full flex-col">
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
                      <div className="mt-auto flex items-center justify-between border-t border-nova-charcoal-lighter pt-4">
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
            </MotionDiv>
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

          <RevealItem>
            <TestimonialMarquee
              testimonials={testimonialData.testimonials}
              testimonialAvatars={testimonialAvatars}
            />
          </RevealItem>

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
            <MotionDiv key={`final-cta-${userType}`} {...tabPanelMotionProps}>
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
            </MotionDiv>
          </AnimatePresence>
        </div>
      </RevealSection>
    </div>
  );
}
