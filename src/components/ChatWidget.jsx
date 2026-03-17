import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Headset, Mail, MessageCircle, Phone, RotateCcw, X } from 'lucide-react';

function WhatsAppIcon({ size = 16, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12 2C6.478 2 2 6.253 2 11.5c0 1.85.568 3.572 1.55 5.018L2.5 22l5.695-1.482A10.179 10.179 0 0 0 12 21c5.522 0 10-4.253 10-9.5S17.522 2 12 2zm0 17.182a8.32 8.32 0 0 1-4.242-1.157l-.304-.18-3.38.88.904-3.22-.198-.328a7.903 7.903 0 0 1-1.225-4.177c0-4.33 3.79-7.853 8.445-7.853s8.445 3.523 8.445 7.853-3.79 7.853-8.445 7.853zm4.633-5.898c-.254-.124-1.502-.72-1.735-.803-.232-.083-.401-.124-.57.124-.169.248-.655.803-.803.968-.148.165-.296.186-.55.062-.254-.124-1.072-.385-2.042-1.227-.755-.656-1.265-1.466-1.413-1.714-.148-.248-.016-.382.111-.506.114-.111.254-.289.381-.434.127-.145.169-.248.254-.413.085-.165.042-.31-.021-.434-.063-.124-.57-1.364-.782-1.865-.206-.487-.416-.421-.57-.428l-.486-.008c-.169 0-.444.062-.676.31-.232.248-.887.865-.887 2.108 0 1.244.908 2.445 1.035 2.61.127.165 1.787 2.692 4.329 3.775.605.257 1.077.41 1.445.525.607.19 1.159.163 1.595.099.487-.072 1.502-.613 1.714-1.204.211-.59.211-1.096.148-1.204-.064-.107-.233-.165-.487-.289z" />
    </svg>
  );
}

const quickQuestions = [
  {
    label: 'How do I find a ride?',
    response:
      "• Open the app.\n• Choose your pickup and destination.\n• Book from available riders on your route.",
  },
  {
    label: 'How do I become a Rider?',
    response:
      '• Register as a rider.\n• Complete verification.\n• Start posting routes.',
  },
  {
    label: 'How do payouts work?',
    response:
      '• Complete trips as a rider.\n• Payouts are processed instantly and securely.\n• Funds are sent to your wallet.',
  },
  {
    label: 'How do I report an issue?',
    response:
      '• Use the in-app support chat.\n• Provide details of the issue.\n• Our team will assist you promptly.',
  },
  {
    label: 'How do I download the App?',
    response:
      '• Visit the App Store or Google Play Store.\n• Search for "FeyRide".\n• Download and install the app.',
  },
];

const initialMessages = [
  {
    id: 1,
    sender: 'bot',
    text: 'Hi there, Welcome to FeyRide Support. How can we help you today?',
  },
];

const supportActions = [
  {
    href: 'https://wa.me/2349059773535',
    label: 'Chat on WhatsApp',
    icon: WhatsAppIcon,
    primary: true,
    external: true,
  },
  {
    href: 'tel:+234 810 851 4620',
    label: 'Call +234 810 851 4620',
    icon: Phone,
    primary: false,
    external: false,
  },
  {
    href: 'mailto:support@feyride.co',
    label: 'support@feyride.co',
    icon: Mail,
    primary: false,
    external: false,
  },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const panelRef = useRef(null);
  const messagesEndRef = useRef(null);

  const showQuickQuestions = useMemo(
    () => messages.length <= initialMessages.length && !isTyping,
    [messages.length, isTyping],
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        const launcher = document.querySelector('[data-support-launcher]');
        if (launcher && !launcher.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  useEffect(() => {
    const footerElement = document.querySelector('footer');
    if (!footerElement || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(footerElement);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleOpenSupportChat = () => {
      setIsOpen(true);
    };

    window.addEventListener('open-support-chat', handleOpenSupportChat);
    return () => window.removeEventListener('open-support-chat', handleOpenSupportChat);
  }, []);

  const handleQuickQuestion = (question) => {
    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: question.label,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: question.response,
        },
      ]);
      setIsTyping(false);
    }, 650);
  };

  const handleRestart = () => {
    setMessages(initialMessages);
    setIsTyping(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 right-3 bottom-20 md:right-6 md:bottom-24">
          <div
            ref={panelRef}
            className="w-[min(23rem,calc(100vw-1.5rem))] max-h-[80vh] overflow-hidden rounded-2xl border border-nova-charcoal-lighter bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
          >
            <div className="bg-nova-charcoal text-white px-4 py-3 flex items-center justify-between">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-white/10 inline-flex items-center justify-center">
                  <Headset size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-tight">FeyRide Support</p>
                  <p className="text-xs text-white/80">Online now</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Restart chat"
                  title="Restart chat"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Close chat"
                  title="Close chat"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="p-4 bg-nova-charcoal-light overflow-y-auto max-h-[50vh] space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                      message.sender === 'user'
                        ? 'bg-nova-green text-nova-charcoal rounded-br-md'
                        : 'bg-white text-nova-charcoal rounded-bl-md border border-nova-charcoal-lighter'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="inline-flex items-center gap-1 bg-white border border-nova-charcoal-lighter rounded-2xl px-3 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-nova-charcoal-700 animate-bounce" />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-nova-charcoal-700 animate-bounce"
                    style={{ animationDelay: '0.12s' }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-nova-charcoal-700 animate-bounce"
                    style={{ animationDelay: '0.24s' }}
                  />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t border-nova-charcoal-lighter bg-white space-y-3">
              {showQuickQuestions && (
                <div className="space-y-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question.label}
                      type="button"
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full text-left rounded-lg border border-nova-charcoal-lighter px-3 py-2 text-sm text-nova-charcoal hover:bg-nova-charcoal-light transition-colors"
                    >
                      {question.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="space-y-2">
                {supportActions.map((action) => {
                  const ActionIcon = action.icon;
                  const classes = action.primary
                    ? 'bg-nova-green text-nova-charcoal font-semibold hover:bg-nova-green-dark hover:text-white'
                    : 'border border-nova-charcoal-lighter text-nova-charcoal font-medium hover:bg-nova-charcoal-light';

                  return (
                    <a
                      key={action.label}
                      href={action.href}
                      target={action.external ? '_blank' : undefined}
                      rel={action.external ? 'noreferrer' : undefined}
                      className={`w-full rounded-lg px-3 py-2.5 inline-flex items-center justify-center gap-2 text-sm transition-colors ${classes}`}
                    >
                      <ActionIcon size={16} />
                      {action.label}
                    </a>
                  );
                })}
              </div>

              <div className="pt-1 text-center">
                <Link
                  to="/faq"
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-nova-charcoal-700 hover:text-nova-green transition-colors"
                >
                  Visit Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        data-support-launcher
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed z-50 right-4 bottom-4 h-12 w-12 md:h-14 md:w-auto md:right-6 md:bottom-6 rounded-full px-0 md:px-5 inline-flex items-center justify-center gap-2 shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition-colors ${
          isFooterVisible
            ? 'bg-primary-500 text-nova-charcoal hover:bg-primary-500'
            : 'bg-nova-charcoal text-white hover:bg-black'
        }`}
        aria-expanded={isOpen}
        aria-label="Open support chat"
      >
        <MessageCircle size={18} />
        <span className="hidden md:inline text-sm font-semibold">Support</span>
      </button>
    </>
  );
}

