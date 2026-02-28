import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Safety from './pages/Safety';
import Stories from './pages/Stories';
import FAQ from './pages/FAQ';
import FindRide from './pages/FindRide';
import PostRoute from './pages/PostRoute';
import Pricing from './pages/Pricing';
import Earnings from './pages/Earnings';
import About from './pages/About';
import Careers from './pages/Careers';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Team from './pages/Team';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import './App.css';

export default function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
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
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}


