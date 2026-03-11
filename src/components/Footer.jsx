import { Link } from "react-router-dom";
import AppStoreBadge from "./AppStoreBadge";
import GooglePlayBadge from "./GooglePlayBadge";
import logo from "../assets/Feyride Logo.svg";
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';


export default function Footer() {
  const { t } = useLanguage();
  const MotionFooter = motion.footer;
  const MotionDiv = motion.div;
  const MotionA = motion.a;
  const disableSocialLink = (event) => {
    event.preventDefault();
  };

  return (
    <MotionFooter
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-nova-charcoal text-white mt-20 border-t-2 border-nova-green/50"
    >
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
          {/* Brand & Address */}
          <MotionDiv
            className="md:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          >
            <Link to="/" className="flex items-center gap-2 mb-2">
              <img src={logo} alt="FeyRide Logo" className="h-10 w-auto" loading="lazy" />
            </Link>
            <p className="text-gray-300 text-sm mb-2">{t('footer.brand')}</p>
            <p className="text-gray-400 text-xs inline-flex items-center gap-2">
              <MapPin size={14} className="text-nova-green" />
              {t('footer.address')}
            </p>
            <p className="text-gray-400 text-xs mt-1 inline-flex items-center gap-2">
              <Phone size={14} className="text-nova-green" />
              {t('footer.call').split(':')[0]}
              <span className="inline-flex items-center gap-2">
                <a
                  href="https://wa.me/2349059773535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-nova-green transition"
                >
                  +234 905 977 3535
                </a>
                <span className="text-gray-500">/</span>
                <a
                  href="https://wa.me/2348108514620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-nova-green transition"
                >
                  +234 810 851 4620
                </a>
              </span>
            </p>
            <p className="text-gray-400 text-xs mt-1 inline-flex items-center gap-2">
              <Mail size={14} className="text-nova-green" />
              {t('footer.email').split(':')[0]}
              <a href="mailto:support@feyride.co" className="hover:text-nova-green transition">
                support@feyride.co
              </a>
            </p>
            <div className="flex gap-3 mt-2">
              <MotionA
                whileHover={{ scale: 1.15, color: '#00C48C' }}
                transition={{ type: 'spring', stiffness: 300 }}
                href="#"
                onClick={disableSocialLink}
                aria-disabled="true"
                aria-label="Facebook"
              >
                <svg width="20" height="20" fill="currentColor" className="text-white"><path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.583v-7.729H8.077V9.237h2.61V7.077c0-2.587 1.582-3.997 3.892-3.997 1.107 0 2.057.082 2.335.119v2.708h-1.602c-1.256 0-1.5.597-1.5 1.473v1.931h3l-.391 3.034h-2.609V20h5.116c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
              </MotionA>
              <MotionA
                whileHover={{ scale: 1.15, color: '#00C48C' }}
                transition={{ type: 'spring', stiffness: 300 }}
                href="#"
                onClick={disableSocialLink}
                aria-disabled="true"
                aria-label="Twitter"
              >
                <svg width="20" height="20" fill="currentColor" className="text-white"><path d="M20 3.924a8.19 8.19 0 0 1-2.357.646A4.118 4.118 0 0 0 19.448 2.3a8.224 8.224 0 0 1-2.605.996A4.107 4.107 0 0 0 9.85 6.03a11.65 11.65 0 0 1-8.457-4.287a4.106 4.106 0 0 0 1.27 5.482A4.073 4.073 0 0 1 .8 6.575v.052a4.108 4.108 0 0 0 3.292 4.025a4.095 4.095 0 0 1-1.853.07a4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 17.542a11.616 11.616 0 0 0 6.29 1.844c7.547 0 11.675-6.155 11.675-11.49c0-.175-.004-.349-.012-.522A8.18 8.18 0 0 0 20 3.924z"/></svg>
              </MotionA>
              <MotionA
                whileHover={{ scale: 1.15, color: '#00C48C' }}
                transition={{ type: 'spring', stiffness: 300 }}
                href="https://www.instagram.com/fey.ride?igsh=MWgwZGo2YW11cDhhdw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg width="20" height="20" fill="currentColor" className="text-white"><path d="M10 2.163c2.668 0 2.987.01 4.034.058c.997.046 1.538.215 1.897.36c.477.185.82.406 1.18.766c.36.36.581.703.766 1.18c.145.359.314.9.36 1.897c.048 1.047.058 1.366.058 4.034s-.01 2.987-.058 4.034c-.046.997-.215 1.538-.36 1.897c-.185.477-.406.82-.766 1.18c-.36.36-.703.581-1.18.766c-.359.145-.9.314-1.897.36c-1.047.048-1.366.058-4.034.058s-2.987-.01-4.034-.058c-.997-.046-1.538-.215-1.897-.36c-.477-.185-.82-.406-1.18-.766c-.36-.36-.581-.703-.766-1.18c-.145-.359-.314-.9-.36-1.897C2.173 12.987 2.163 12.668 2.163 10s.01-2.987.058-4.034c.046-.997.215-1.538.36-1.897c.185-.477.406-.82.766-1.18c.36-.36.703-.581 1.18-.766c.359-.145-.9-.314-1.897-.36C7.013 2.173 7.332 2.163 10 2.163zm0-2.163C7.259 0 6.912.01 5.865.058c-1.06.049-1.788.218-2.418.465c-.66.257-1.22.6-1.78 1.16c-.56.56-.903 1.12-1.16 1.78c-.247.63-.416 1.358-.465 2.418C.01 6.912 0 7.259 0 10s.01 3.088.058 4.135c.049 1.06.218 1.788.465 2.418c.257.66.6 1.22 1.16 1.78c.56.56 1.12.903 1.78 1.16c.63.247 1.358.416 2.418.465C6.912 19.99 7.259 20 10 20s3.088-.01 4.135-.058c1.06-.049 1.788-.218 2.418-.465c.66-.257 1.22-.6 1.78-1.16c.56-.56.903-1.12 1.16-1.78c.247-.63.416-1.358.465-2.418c.048-1.047.058-1.394.058-4.135s-.01-3.088-.058-4.135c-.049-1.06-.218-1.788-.465-2.418c-.257-.66-.6-1.22-1.16-1.78c-.56-.56-1.12-.903-1.78-1.16c-.63-.247-1.358-.416-2.418-.465C13.088.01 12.741 0 10 0z"/><circle cx="10" cy="10" r="3.5"/></svg>
              </MotionA>
              <MotionA
                whileHover={{ scale: 1.15, color: '#00C48C' }}
                transition={{ type: 'spring', stiffness: 300 }}
                href="#"
                onClick={disableSocialLink}
                aria-disabled="true"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" fill="currentColor" className="text-white"><path d="M18.146 18.146h-3.08v-4.356c0-1.038-.019-2.374-1.447-2.374c-1.447 0-1.669 1.13-1.669 2.297v4.433h-3.08V7.5h2.958v1.453h.042c.412-.78 1.42-1.602 2.924-1.602c3.127 0 3.703 2.057 3.703 4.736v6.059zM5.337 6.047a1.785 1.785 0 1 1 0-3.57a1.785 1.785 0 0 1 0 3.57zM6.877 18.146H3.797V7.5h3.08v10.646zM20 0H0v20h20V0z"/></svg>
              </MotionA>
            </div>
          </MotionDiv>

          {/* For Passengers */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.forGuests')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/find-ride" className="hover:text-primary-400 transition">
                  {t('footer.findRide')}
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-primary-400 transition">
                  {t('footer.howItWorks')}
                </Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-primary-400 transition">
                  {t('footer.safety')}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-nova-green transition">
                  {t('footer.pricing')}
                </Link>
              </li>
            </ul>
          </div>

          {/* For Riders */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.forHosts')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/post-route" className="hover:text-nova-green transition">
                  {t('footer.postRoute')}
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-nova-green transition">
                  {t('footer.howItWorks')}
                </Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-nova-green transition">
                  {t('footer.trustSafety')}
                </Link>
              </li>
              <li>
                <Link to="/earnings" className="hover:text-nova-green transition">
                  {t('footer.earnings')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-nova-green transition">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-nova-green transition">
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-nova-green transition">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-nova-green transition">
                  {t('footer.blog')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-8 items-start">
            <div>
              <h4 className="text-white font-semibold mb-3">{t('footer.getInTouch')}</h4>
              <p className="text-sm text-gray-400 mb-4">
                {t('footer.helpText')}
              </p>
              <form
                className="space-y-3"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);

                  try {
                    const response = await fetch(
                      "https://formspree.io/f/mqedwnzy",
                      {
                        method: "POST",
                        body: formData,
                        headers: {
                          Accept: "application/json",
                        },
                      },
                    );

                    if (response.ok) {
                      e.target.reset();
                      const toast = document.createElement("div");
                      toast.className =
                        "fixed bottom-4 right-4 bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg";
                      toast.textContent =
                        "Message sent! Thanks for reaching out.";
                      document.body.appendChild(toast);
                      setTimeout(() => toast.remove(), 4000);
                    } else {
                      console.error("Form submission failed");
                    }
                  } catch (error) {
                    console.error("Error submitting form:", error);
                  }
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-600"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-600"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Enter message"
                  rows="3"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-600 resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors text-sm"
                >
                  {t('footer.sendMessage')}
                </button>
              </form>
            </div>
            
            <div className="lg:col-start-3 lg:justify-self-end">
              <h4 className="text-white font-semibold mb-3">
                {t('footer.downloadApp')}
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                {t('footer.downloadText')}
              </p>
              <div className="flex flex-row gap-4 justify-start items-center max-w-md lg:justify-end">
                <a
                  href="https://apps.apple.com/ng/app/FeyRide-rides/id1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity w-auto"
                >
                  <AppStoreBadge className="h-14 w-full" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.FeyRiderider.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity w-auto"
                >
                  <GooglePlayBadge className="h-14 w-full" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2026 FeyRide. {t('footer.copyright')}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-nova-green transition">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="hover:text-nova-green transition">
              {t('footer.terms')}
            </Link>
            <Link to="/contact" className="hover:text-nova-green transition">
              {t('footer.contact')}
            </Link>
          </div>
        </div>
      </div>
    </MotionFooter>
  );
}

