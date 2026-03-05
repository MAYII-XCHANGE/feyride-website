import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css';
import './styles/animations.css';

// Lazy load pages for code splitting
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Safety = lazy(() => import('./pages/Safety'));
const Stories = lazy(() => import('./pages/Stories'));
const FAQ = lazy(() => import('./pages/FAQ'));
const FindRide = lazy(() => import('./pages/FindRide'));
const PostRoute = lazy(() => import('./pages/PostRoute'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Earnings = lazy(() => import('./pages/Earnings'));
const About = lazy(() => import('./pages/About'));
const Careers = lazy(() => import('./pages/Careers'));
const Sustainability = lazy(() => import('./pages/Sustainability'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Team = lazy(() => import('./pages/Team'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Login = lazy(() => import('./pages/Login'));
const Profile = lazy(() => import('./pages/Profile'));

export default function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex flex-col min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <PageTransition>
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-nova-green mx-auto"></div></div></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/safety" element={<Safety />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/find-ride" element={<FindRide />} />
                <Route path="/post-route" element={<PostRoute />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/earnings" element={<Earnings />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/team" element={<Team />} />
                <Route path="/coming-soon" element={<ComingSoon />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </PageTransition>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}


